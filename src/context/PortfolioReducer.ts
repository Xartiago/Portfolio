/* Interfaces */
import { PortfolioGlobalState, ReducerActions } from "../interfaces/interfaces";

export const PortfolioReducer = (state: PortfolioGlobalState, action: ReducerActions): PortfolioGlobalState => {
    const { type } = action
    switch (type) {
        case 'DARK_MODE_ON':
            return {
                ...state,
                DarkMode: true
            }
        case 'DARK_MODE_OFF':
            return {
                ...state,
                DarkMode: false
            }
        default:
            return state
    }
}