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
    const DMOn = () => { /* On */
        if (!PortfolioState.DarkMode) dispatch({ type: 'DARK_MODE_ON' })
    }
    const DMOff = () => { /* Off */
        if (PortfolioState.DarkMode) dispatch({ type: 'DARK_MODE_OFF' })
    }
    const LanEs = () => {
        if (PortfolioState.Language === 'En') dispatch({ type: 'SWITCH_LANGUAGE_ES', payload: 'Es' })
    }
    const LanEn = () => {
        if (PortfolioState.Language === 'Es') dispatch({ type: 'SWITCH_LANGUAGE_EN', payload: 'En' })
    }

    return (
        <PortfolioContext.Provider value={
            { PortfolioState, DMOn, DMOff, LanEs, LanEn } /* Context properties */
        }>
            {children}
        </PortfolioContext.Provider>
    )
}
