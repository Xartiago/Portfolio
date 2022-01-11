import { About } from './components/About'
import { AbsoluteControllers } from './components/AbsoluteControllers'
import { Contact } from './components/Contact'
import { ExpyStud } from './components/ExpyStud'
import { Hobbies } from './components/Hobbies'
import { Home } from './components/Home'
import { NavBar } from './components/NavBar'
import { Projects } from './components/Projects'
import { Techs } from './components/Techs'
import { PortfolioProvider } from './context/PortfolioProvider'

export const App = () => {
  return (
    <PortfolioProvider>
      <AbsoluteControllers />
      <Home />
      <NavBar />
      <About />
      <ExpyStud />
      <Techs />
      <Projects />
      <Hobbies />
      <Contact />
    </PortfolioProvider>
  )
}