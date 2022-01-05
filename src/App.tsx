import { About } from './components/About'
import { Home } from './components/Home'
import { PortfolioProvider } from './context/PortfolioProvider'

export const App = () => {
  return (
    <PortfolioProvider>
      <Home />
    </PortfolioProvider>
  )
}