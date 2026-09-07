import Header from "./components/layout/Header"
import About from "./components/sections/About"
import Contacts from "./components/sections/Contacts"
import Events from "./components/sections/Events"
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
        <Contacts />
      </main>
    </>
  )
}

export default App