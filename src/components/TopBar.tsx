import { JSXElement } from "solid-js"

const socialMedias: { title: string, href: string, icon: JSXElement }[] = [
  {
    title: "BingXuanBaka@Twitter",
    href: "https://twitter.com/BingXuanBaka",
    icon: <i class="fa-brands fa-twitter text-lg"></i>
  },
  {
    title: "BingXuanBaka@Github",
    href: "https://github.com/BingXuanBaka",
    icon: <i class="fa-brands fa-github text-lg"></i>
  }
]

function TopBar() {
  return (
    <div class="h-12 flex flex-row justify-between">
      <div class="mx-0.5">
        {socialMedias.map(element => (
          <SocialMediaLink title={element.title} href={element.href}>
            {element.icon}
          </SocialMediaLink>
        ))}
      </div>

      <div class="mx-0.5">
        <TopBarLink href="#about">about</TopBarLink>
      </div>
    </div>
  )
}

function TopBarLink(props: {
  children: JSXElement,
  href: string
}) {
  return (
    <a class="px-4 py-2 inline-block
      align-middle my-1 mx-0.5 hover:bg-container
      rounded text-primary-text"
      href={props.href}>
      {props.children}
    </a>
  )
}

function SocialMediaLink(props: {
  children: JSXElement,
  title: string,
  href: string
}) {
  return (
    <a class="box-content p-2 my-1 mx-0.5 h-6 w-6 leading-6 inline-block 
      align-middle hover:bg-container
      rounded text-primary-text text-center"
      title={props.title}
      href={props.href}>
      {props.children}
    </a>
  )
}

export { TopBar }