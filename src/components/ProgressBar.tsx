function ProgressBar(props: { value: number }) {
  return (<div class="h-2 bg-container rounded">
    <div class="h-2 bg-main rounded" style={`width: ${props.value * 100}%`}></div>
  </div>)
}

export { ProgressBar }