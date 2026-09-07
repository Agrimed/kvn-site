import Header from "./components/layout/Header"
import About from "./components/sections/About"
import Contacts from "./components/sections/Contacts"
import Events from "./components/sections/Events"
import Gallery from "./components/sections/Gallery"
import Hero from "./components/sections/Hero"
import Team from "./components/sections/Team"

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Team />
        <Events />
        <Gallery />
        <Contacts />
      </main>
    </>
  )
}

export default App