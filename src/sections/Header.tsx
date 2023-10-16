function Header() {
  const description: string[] = ["Arch user", "UI 设计", "React", "死废物"]

  return (
    <div class="h-[calc(100vh-6rem)] flex items-center justify-between">
      <div>
        <h1 class="text-6xl text-primary-text leading-snug">
          好的<br />这里是
          <span class="font-bold text-main">冰轩</span>
        </h1>
        <span class="text-secondary-text">{description.join(" · ")}</span>
      </div>

      <div class="relative">
        <img src="/avatar.png" alt="BingXuan's avatar" class="w-40 rounded-full" />
        <img src="/avatar.png" aria-hidden="true"
          class="w-40 rounded-full absolute top-0 left-0 blur-2xl opacity-20" />
      </div>
    </div>
  )
}

export { Header }