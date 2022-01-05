import { About } from './components/About'
import { PortfolioProvider } from './context/PortfolioProvider'

export const App = () => {
  return (
    <PortfolioProvider>
      <About />
    </PortfolioProvider>
  )
}