import { JSXElement } from "solid-js"
import { Card } from "./components/Card"
import { ProgressBar } from "./components/ProgressBar"
import { Avatar } from "./components/Avatar"
import { CardGrid } from "./components/CardGrid"

const skills: { name: string, value: number }[] = [
  {
    name: "React",
    value: 0.35
  },
  {
    name: "Flutter",
    value: 0.22
  }
]

const friends: {
  title: string;
  description: string;
  href: string;
  avatar?: string;
}[] = [
    {
      title: "中二病晚期の物語",
      href: "https://imfurry.com",
      avatar: "https://cdn-imfurry.imfurry.com/avatar/zebwqFurryAvatar.png",
      description: "一只狐狸敲出的一个奇迹",
    },
    {
      title: "Allenyou’s Blog",
      href: "https://www.allenyou.wang/",
      avatar: "https://cravatar.cn/avatar/59b2fbdd507a84fe181b0af3e4ad7be3",
      description: "稻花香里说丰年，听取WA声一片",
    },
    {
      title: "天洛",
      href: "https://foxluo.com/",
      avatar: "https://foxluo.com/upload/头像.PNG/",
      description: ""
    }
  ]

const mainContents: {
  title: string,
  slug: string,
  content: JSXElement
}[] = [
    {
      title: "关于",
      slug: "about",
      content: <>
        好的，这里是冰轩。<br />
        <code class="text-green-500 italic">
          //TODO: Write "about" section.
        </code>
      </>
    },
    {
      title: "技能",
      slug: "skills",
      content: <>
        我或许并没有什么能拿的出手的...就是了...... And just skip this section.<br />
        <table class="w-full">
          <tbody>
            {
              skills.map(element => (
                <tr>
                  <td class="w-0 pr-2 py-2">{element.name}</td>
                  <td class="py-2 pl-2"><ProgressBar value={element.value} /></td>
                </tr>
              )
              )
            }
          </tbody>
        </table>
      </>
    },
    {
      title: "友链",
      slug: "friends",
      content: <>
        <CardGrid children={friends.map(element =>
          <a href={element.href}>
            <Card
              title={element.title}
              description={element.description}
              leading={
                <Avatar src={element.avatar} fallbackChar={element.title.charAt(0)} />
              }
            />
          </a>
        )}/>
      </>
    }
  ]

export default mainContents