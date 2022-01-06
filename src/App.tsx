import { About } from './components/About'
import { AbsoluteControllers } from './components/AbsoluteControllers'
import { Home } from './components/Home'
import { NavBar } from './components/NavBar'
import { NewHome } from './components/NewHome'
import { PortfolioProvider } from './context/PortfolioProvider'

export const App = () => {
  return (
    <PortfolioProvider>
      <AbsoluteControllers />
      <NewHome />
      <NavBar />
      <About />
    </PortfolioProvider>
  )
}