import sections from "../mainContents"

function MainContent() {
  return (<>
    {sections.map(element => <div class="flex flex-col gap-6">
      <a href={"#" + element.slug}>
        <h2 id={element.slug}>
          {element.title}
        </h2>
      </a>
      <p class="leading-8">
        {element.content}
      </p>
    </div>)}
  </>)
}

export { MainContent }