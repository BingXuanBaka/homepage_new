import { JSXElement } from "solid-js"

function Card(props: {
  title: string,
  description?: string,
  leading?: JSXElement
}) {
  return (
    <div class="h-16 flex flex-row items-center p-3 gap-3 bg-container rounded">
      {props.leading}
      <div class="flex flex-col overflow-hidden leading-tight whitespace-nowrap">
        <span class="overflow-hidden overflow-ellipsis">{props.title}</span>
        <span class="overflow-hidden overflow-ellipsis text-xs text-secondary-text">
          {props.description}
        </span>
      </div>
    </div>
  )
}

export { Card }