/* Interfaces */
import { PortfolioGlobalState, ReducerActions } from "../interfaces/interfaces";

export const PortfolioReducer = (state: PortfolioGlobalState, action: ReducerActions): PortfolioGlobalState => {
    const { type, payload } = action
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
        case 'SWITCH_LANGUAGE_EN':
            return {
                ...state,
                Language: payload
            }
        case 'SWITCH_LANGUAGE_ES':
            return {
                ...state,
                Language: payload
            }
        default:
            return state
    }
}