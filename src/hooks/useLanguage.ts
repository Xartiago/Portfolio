import { useContext } from "react"
import { PortfolioContext } from "../context/PortfolioContext"

/* This custom hook allow easy way control the Language properties */

export const useLanguage = () => {
    const { PortfolioState, LanEn, LanEs } = useContext(PortfolioContext)
    const { Language } = PortfolioState
    
    return {
        Language,
        LanEn,
        LanEs
    }
}