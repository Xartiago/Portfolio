/* -- Props -- */
/* Provider Context Props */
export interface PortfProvPropsI {
    children: JSX.Element | JSX.Element[];
}
/* -- State -- */
/* Global Portfolio State */
export interface PortfolioGlobalState {
    DarkMode: Boolean;
}
/* -- Reducer -- */
/* Actions */
interface DarkModeOn {
    type: 'DARK_MODE_ON';
}
interface DarkModeOff {
    type: 'DARK_MODE_OFF';
}
/* Reducer Actions Types */
export type ReducerActions = DarkModeOn | DarkModeOff;