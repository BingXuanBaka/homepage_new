import { JSXElement } from "solid-js";

export function CardGrid(props: { children?: JSXElement }) {
  return (
    <div class="w-full gap-6 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
      {props.children}
    </div>
  );
}
