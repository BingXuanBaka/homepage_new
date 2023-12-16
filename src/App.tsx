import { TopBar } from "./components/TopBar"
import { Header } from "./sections/Header"
import { MainContent } from "./sections/MainContent"
import { Footer } from "./sections/Footer"

function App() {
  return (
    <>
      <TopBar />
      <div class="p-12 pt-0 max-sm:p-8 mx-auto max-w-7xl flex flex-col gap-12 text-primary-text">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </>
  )
}

export default App
