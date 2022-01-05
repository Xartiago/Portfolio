import { useContext } from "react"
import { PortfolioContext } from "../context/PortfolioContext"

/* This custom hook allow easy way control the Dark Mode properties */

export const useDarkMode = () => {
    const { PortfolioState, DMOff, DMOn } = useContext(PortfolioContext)
    const { DarkMode } = PortfolioState
    
    return {
        DarkMode,
        DMOff,
        DMOn
    }
}