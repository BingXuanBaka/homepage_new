import { JSXElement } from "solid-js"
import mainContents from "../mainContents"

import FaTwitter from '@fortawesome/fontawesome-free/svgs/brands/twitter.svg'
import FaGithub from '@fortawesome/fontawesome-free/svgs/brands/github.svg'

const socialMedias: { title: string, href: string, icon: JSXElement }[] = [
  {
    title: "BingXuanBaka@Twitter",
    href: "https://twitter.com/BingXuanBaka",
    icon: <FaTwitter></FaTwitter>
  },
  {
    title: "BingXuanBaka@Github",
    href: "https://github.com/BingXuanBaka",
    icon: <FaGithub></FaGithub>
  }
]

function TopBar() {
  return (
    <div class="h-12 flex flex-row justify-between z-50 sticky">
      <div class="mx-0.5">
        {socialMedias.map(element => (
          <SocialMediaLink title={element.title} href={element.href}>
            {element.icon}
          </SocialMediaLink>
        ))}
      </div>

      <div class="mx-0.5">
        {mainContents.map(element => (
          <TopBarLink href={`#${element.slug}`}>
            {element.title}
          </TopBarLink>
        ))}
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
    <a class="box-content p-2 my-1 mx-0.5 h-6 w-6 leading-6
      align-middle hover:bg-container text-primary-text fill-primary-text
      rounded [&>svg]:h-[18px] inline-flex flex-row items-center justify-center"
      title={props.title}
      href={props.href}>
      {props.children}
    </a>
  )
}

export { TopBar }