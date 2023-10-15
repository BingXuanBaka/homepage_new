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

      <img src="/avatar.png" class="w-40 rounded-full" />
    </div>
  )
}

export { Header }