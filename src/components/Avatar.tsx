export function Avatar(props: {
  src?: string;
  fallbackChar?: string;
  class?: string;
}) {
  return (
    <div class={`w-10 h-10 rounded-full bg-neutral-600 relative shrink-0 overflow-hidden 
      [&>*]:absolute [&>*]:h-full [&>*]:w-full ${props.class}`}>
      <i class="text-center leading-10 not-italic" aria-hidden="true">
        {props.fallbackChar}
      </i>
      <img
        alt="avatar"
        onerror={(error) =>
          ((error.target as HTMLImageElement).style.display = "none")
        }
        loading="lazy"
        src={props.src}
        aria-hidden="true"
      />
    </div>
  );
}
