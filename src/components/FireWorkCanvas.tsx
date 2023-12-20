import {createEffect, createSignal, onCleanup, onMount} from "solid-js";

type Point = {
  radius: number;
  hsl: string;
  angle: number;
}

enum FireworkStatus {
  "RISING",
  "SCATTERING",
  "FADED"
}

type Firework = {
  x: number;
  y: number;

  hue: number;
  radius: number;
  status: FireworkStatus;

  risingProgress: number;
  scatteringProgress: number;

  risingY: number;
  risingSpeed: number;

  points: Point[];
}

export default function FireWorkCanvas(props: { enabled: boolean }) {
  const [fireworks, setFireworks] = createSignal<Firework[]>([])

  let canvasRef: HTMLCanvasElement | undefined = void 0;

  function addFirework(x: number, y: number): Firework {
    const hue = Math.random() * 360
    // const radius = Math.round(Math.random() * 6 + 4);
    const radius = Math.random() * 5 + 5;
    const points: Point[] = [];

    // count will increase when radius increases
    const count = Math.round(Math.random() * 10 + (radius * 5) + 15)

    // generate points
    for (let i = 0; i < count; i++) {
      const pointHSL =
        `${Math.ceil((Math.random() * 25) + hue - 25)},` +
        `${Math.ceil(Math.random() * 20 + 70)}%,` +
        `${Math.ceil(Math.random() * 20 + 40)}%`;

      let point: Point = {
        angle: Math.random() * 360,
        // radius: i > 10 ? Math.random() * radius : Math.random() * 2 + radius - 2,
        radius: Math.random() * 8 + 2,
        hsl: pointHSL,
      }

      points.push(point)
    }

    return {
      hue: hue,
      points: points,
      radius: radius,
      status: FireworkStatus.RISING,
      x: x,
      y: y,
      risingY: 0,
      risingSpeed: y / window.innerHeight,

      scatteringProgress: 0,
      risingProgress: 0
    }
  }

  function drawScatteringFirework(firework: Firework) {
    const canvasContext = canvasRef?.getContext("2d");
    const points = firework.points;

    if (canvasContext == void 0) return;

    points.map(point => {
      let progress = firework.scatteringProgress ** (1 / 1.6);

      let pointX = Math.cos(point.angle) * ((firework.radius * point.radius) * 1.7) * progress;
      let pointY = Math.sin(point.angle) * ((firework.radius * point.radius) * 1.7) * progress;

      canvasContext.beginPath();

      const gravity = (firework.radius * 3) * ((firework.scatteringProgress) ** 2 * 2);

      canvasContext.arc(
        firework.x + pointX,
        firework.y + pointY + (gravity <= 0 ? 0 : gravity),
        2,
        Math.PI * 2,
        0
      );

      canvasContext.closePath();

      canvasContext.fillStyle = `HSLA(${point.hsl},${1 - progress})`;

      canvasContext.fill();
    })

    firework.scatteringProgress += 0.01 * ((1 - ((firework.radius - 4) / 6)) * 0.4 + 0.6);

    if (firework.scatteringProgress > 1) firework.status = FireworkStatus.FADED;
  }

  function drawRisingFirework(firework: Firework) {
    const canvasContext = canvasRef?.getContext("2d");

    if (canvasContext == void 0) return;

    canvasContext.beginPath();

    canvasContext.arc(
      firework.x,
      window.innerHeight - (firework.risingProgress * (window.innerHeight - firework.y)),
      3,
      Math.PI * 2,
      0
    )

    canvasContext.closePath();
    canvasContext.fillStyle = `HSL(${firework.hue},80%,50%)`
    canvasContext.fill()

    if (firework.risingProgress > 1) {
      firework.status = FireworkStatus.SCATTERING;
    }

    firework.risingProgress += 0.02 * (firework.risingSpeed * 0.6 + 0.4);
  }

  function genRandomFirework() {
    if (!document.hidden) {
      let x = Math.random() * Math.round(window.innerWidth * 0.8) + Math.round(window.innerWidth * 0.1)
      let y = Math.random() * Math.round(window.innerHeight * 0.8) + Math.round(window.innerHeight * 0.1)
      setFireworks(prev => [...prev, addFirework(Math.round(x), Math.round(y))])
    }
  }

  function drawFrame() {
    const canvasContext = canvasRef?.getContext("2d");
    if (canvasContext == void 0) return;

    canvasContext.fillStyle = 'rgba(0,0,0,0.07)';
    canvasContext.fillRect(0, 0, canvasRef?.width ?? 0, canvasRef?.height ?? 0);

    for (let index = 0; index < fireworks().length; index++) {
      const firework = fireworks()[index];

      if (firework.status === FireworkStatus.RISING) {
        drawRisingFirework(firework);
      }

      if (firework.status === FireworkStatus.SCATTERING) {
        drawScatteringFirework(firework);
      }

      if (firework.status === FireworkStatus.FADED) {
        setFireworks(((prev) => prev.splice(index)));
      }
    }

    props.enabled && requestAnimationFrame(drawFrame)
  }

  function resizeCanvas() {
    if (canvasRef !== void 0) {
      canvasRef.width = window.innerWidth;
      canvasRef.height = window.innerHeight;
    }
  }

  function randomFireworkTimeout (){
    setTimeout(()=>{
      console.log("123")
      genRandomFirework();
      props.enabled && randomFireworkTimeout();
    },Math.round(Math.random() * 500 + 200))
  }

  onMount(() => window.addEventListener("resize", resizeCanvas));
  onCleanup(() => window.removeEventListener("resize", resizeCanvas));

  createEffect(() => {
    if (canvasRef !== void 0) resizeCanvas();

    props.enabled && requestAnimationFrame(drawFrame)

    props.enabled && randomFireworkTimeout();
  })

  return (
    <canvas onClick={(event) => {
      setFireworks(prev => [...prev, addFirework(event.x, event.y)])
    }
    } ref={ref => canvasRef = ref}/>
  )
}