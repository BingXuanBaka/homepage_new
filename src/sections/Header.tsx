function Header() {
  const description: string[] = ["Arch user", "UI 设计", "React", "死废物"]

  return (
    <div class="h-[calc(100vh-6rem)] gap-10 flex items-center justify-between 
      max-sm:items-start max-sm:flex-col-reverse max-sm:justify-center">
      <div>
        <h1 class="text-6xl text-primary-text leading-snug">
          好的<br />这里是
          <span class="font-semibold text-main">冰轩</span>
        </h1>
        <span class="text-secondary-text">{description.join(" · ")}</span>
      </div>

      <div class="relative w-40 max-sm:m-auto max-sm:w-[60vw]">
        <img src="/avatar.png" alt="BingXuan's avatar" class="w-full rounded-full" />
        <img src="/avatar.png" aria-hidden="true"
          class="w-full rounded-full absolute top-0 left-0 blur-2xl opacity-20" />
      </div>
    </div>
  )
}

export { Header }