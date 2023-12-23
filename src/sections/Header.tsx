import FireWorkCanvas from "../components/FireWorkCanvas.tsx";
import {createSignal, onCleanup, onMount} from "solid-js";
import moment from "moment";

function Header() {
  // const description: string[] = ["Arch user", "UI 设计", "React", "死废物"];

  const [onTop, setOnTop] = createSignal(true);

  const onScrollListener = () => setOnTop(window.scrollY <= 0);

  onMount(() => window.addEventListener("scroll", onScrollListener));
  onCleanup(() => window.removeEventListener("scroll", onScrollListener));

  const [remainTime, setRemainTime] = createSignal<moment.Duration>();
  const [isNewYear, setIsNewYear] = createSignal(false);

  const newYearTime = moment("2024-01-01T00:00");

  const updateRemainTimeDuration = () => {
    setRemainTime(moment.duration(newYearTime.diff(moment())).add(1,"second"));
    setIsNewYear(moment().isAfter(newYearTime));
  };

  const updateRemainTimeDurationInterval = 0;

  onMount(() => {
    updateRemainTimeDuration();
    setInterval(updateRemainTimeDuration, 500);
  });

  onCleanup(() => {
    clearInterval(updateRemainTimeDurationInterval);
  });

  return (
    <div
      class="h-[calc(100vh-6rem)] gap-10 flex items-center justify-between
      max-sm:items-start max-sm:flex-col-reverse max-sm:justify-start"
    >
      <div
        class={`absolute pointer-events-auto h-screen w-screen top-0 left-0 ${
          !onTop() && "opacity-0"
        } transition`}
      >
        <FireWorkCanvas enabled={isNewYear()}/>
      </div>

      <div class="z-10">
        <h1 class="font-normal text-primary-text leading-snug">
          好的
          <br/>
          这里是
          <span class="font-medium text-main">冰轩</span>
        </h1>
        <span class="text-secondary-text">
          { !isNewYear() ?
            "距离新年还剩 " +
            (((remainTime()?.days() ?? 0) > 0) ? `${remainTime()?.days()} 天 ` : "")+
            (((remainTime()?.hours() ?? 0) > 0) ? `${remainTime()?.hours()} 小时 ` : "")+
            (((remainTime()?.minutes() ?? 0) > 0) ? `${remainTime()?.minutes()} 分 ` : "")+
            `${remainTime()?.seconds()} 秒`
            :
            "新年快乐"
          }
        </span>
        {/*<span class="text-secondary-text">{description.join(" · ")}</span>*/}
      </div>

      <div class="relative w-40 max-sm:m-auto z-10 max-sm:hidden">
        <img
          src="/avatar.png"
          alt="BingXuan's avatar"
          class="w-full rounded-full"
        />
        <img
          src="/avatar.png"
          aria-hidden="true"
          class="w-full rounded-full absolute top-0 left-0 blur-2xl opacity-20"
        />
      </div>
    </div>
  );
}

export {Header};
