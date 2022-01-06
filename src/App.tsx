import { About } from './components/About'
import { AbsoluteControllers } from './components/AbsoluteControllers'
import { Home } from './components/Home'
import { PortfolioProvider } from './context/PortfolioProvider'

export const App = () => {
  return (
    <PortfolioProvider>
      <AbsoluteControllers />
      <Home />
    </PortfolioProvider>
  )
}