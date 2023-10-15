import { JSXElement } from "solid-js"
import { Card } from "./components/Card"
import { ProgressBar } from "./components/ProgressBar"

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
      title: "凯莫·琼小羽",
      href: "https://k.catkai.net/",
      avatar: "https://s2.loli.net/2022/05/20/UiM9JeSusCDR4Fd.jpg",
      description: "",
    },
    {
      title: "某猫的个人Blog",
      href: "https://blog.moumao.top/",
      description: "",
    },
    {
      title: "迷失的小K",
      href: "http://www.kclub.fun/",
      avatar: "https://cdn.kclub.fun/wp-content/uploads/2022/08/1660213171-colorful.jpg",
      description: "Just for fun",
    },
    {
      title: "歪皮",
      href: "https://www.gene-yp.com/",
      avatar: "https://pic.gene-yp.com/i/2022/07/25/c2axpo.jpeg",
      description: "Just love, understanding and positivity",
    },
    {
      title: "Foxhole",
      href: "https://blog.southfox.me/",
      avatar: "https://blog.southfox.me/favicon.png",
      description: "",
    },
    {
      title: "FurLibrary",
      href: "https://www.furrybbs.net/",
      description: "(此站已死，留作纪念)",
    },
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
        <div class="w-full gap-6 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {friends.map(element =>
            <a href={element.href}>
              <Card
                title={element.title}
                description={element.description}
                leading={
                  element.avatar == null ?
                    <i class="w-10 h-10 rounded-full bg-neutral-600 shrink-0
                      text-center leading-10 not-italic" aria-hidden="true">
                      {element.title.charAt(0)}
                    </i> :
                    <img class="w-10 h-10 rounded-full text-center leading-10 
                      bg-neutral-600 shrink-0" alt={element.title.charAt(0)}
                      loading="lazy" src={element.avatar} aria-hidden="true"/>
                }
              />
            </a>
          )}
        </div>

      </>
    }
  ]

export default mainContents