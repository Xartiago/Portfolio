/* -- Props -- */
/* Provider Context Props */
export interface PortfProvPropsI {
    children: JSX.Element | JSX.Element[];
}
/* -- State -- */
/* Global Portfolio State */
export interface PortfolioGlobalState {
    DarkMode: Boolean;
    Language: 'Es' | 'En'
}
/* -- Reducer -- */
/* Actions */
interface LanguageEs {
    type: 'SWITCH_LANGUAGE_ES';
    payload: 'Es';
}
interface LanguageEn {
    type: 'SWITCH_LANGUAGE_EN';
    payload: 'En';
}
interface DarkModeOn {
    type: 'DARK_MODE_ON';
    payload?: any;
}
interface DarkModeOff {
    type: 'DARK_MODE_OFF';
    payload?: any;
}
/* Reducer Actions Types */
export type ReducerActions = LanguageEn | LanguageEs | DarkModeOn | DarkModeOff ;