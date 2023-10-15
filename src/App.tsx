import "@fortawesome/fontawesome-free/css/all.css"

import { TopBar } from "./components/TopBar"
import { Header } from "./sections/Header"
import { MainContent } from "./sections/MainContent"

function App() {
  return (
    <>
      <TopBar />
      <div class="p-12 pt-0 max-sm:p-8 mx-auto max-w-7xl flex flex-col gap-12 text-primary-text">
        <Header />
        <MainContent />
      </div>
    </>
  )
}

export default App
