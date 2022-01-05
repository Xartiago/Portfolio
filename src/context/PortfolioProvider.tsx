import { useReducer } from 'react'
/* Interfaces */
import { PortfolioGlobalState, PortfProvPropsI } from '../interfaces/interfaces'
/* React Context */
import { PortfolioContext } from './PortfolioContext'
import { PortfolioReducer } from './PortfolioReducer'

/* Portfolio Initial State */
const InitalState: PortfolioGlobalState = {
    DarkMode: false
}

export const PortfolioProvider = ({ children }: PortfProvPropsI) => {

    const [PortfolioState, dispatch] = useReducer(PortfolioReducer, InitalState);
    /* Switch Dark Mode */
    const DMOn = () => { /* On */
        dispatch({type:'DARK_MODE_ON'})
    }
    const DMOff = () => { /* Off */
        dispatch({type:'DARK_MODE_OFF'})
    }

    return (
        <PortfolioContext.Provider value={
            { PortfolioState, DMOn, DMOff } /* Context vars */
            }>
            {children}
        </PortfolioContext.Provider>
    )
}
