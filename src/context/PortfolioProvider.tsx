import { useReducer } from 'react'
/* Interfaces */
import { PortfolioGlobalState, PortfProvPropsI } from '../interfaces/interfaces'
/* React Context */
import { PortfolioContext } from './PortfolioContext'
import { PortfolioReducer } from './PortfolioReducer'

/* Portfolio Initial State */
const InitalState: PortfolioGlobalState = {
    DarkMode: true,
    Language: 'Es'
}

export const PortfolioProvider = ({ children }: PortfProvPropsI) => {

    const [PortfolioState, dispatch] = useReducer(PortfolioReducer, InitalState);
    /* Switch Dark Mode */
    const DMOn = () => { if (!PortfolioState.DarkMode) dispatch({ type: 'DARK_MODE_ON' }) } // Dark Mode on
    const DMOff = () => { if (PortfolioState.DarkMode) dispatch({ type: 'DARK_MODE_OFF' }) } // Dark mode off
    const LanEs = () => { if (PortfolioState.Language === 'En') dispatch({ type: 'SWITCH_LANGUAGE_ES', payload: 'Es' }) } // Language Espanish
    const LanEn = () => { if (PortfolioState.Language === 'Es') dispatch({ type: 'SWITCH_LANGUAGE_EN', payload: 'En' }) } // Language English

    return (
        <PortfolioContext.Provider value={
            { PortfolioState, DMOn, DMOff, LanEs, LanEn } /* Context properties */
        }>
            {children}
        </PortfolioContext.Provider>
    )
}
