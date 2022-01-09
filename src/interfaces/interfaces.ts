/* -- Props -- */
/* Provider Context Props */
export interface PortfProvPropsI {
    children: JSX.Element | JSX.Element[];
}
/* Event Handler */
/* Select */
export type Event = React.ChangeEvent<HTMLSelectElement>
/* -- Syled components props -- */
/* Dark mode */
export interface StysI {
    DM: Boolean;
}
/* Menu */
export interface MenStI {
    Menu?: Boolean;
}
/* Dark Mode and Menu */
export interface MeDMI {
    DM: Boolean;
    Menu: Boolean
}
export interface TitlesI {
    id: string;
    titleEn: string;
    titleES: string;
    descriptionEn: string;
    descriptionEs: string;
    year: string;
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
export type ReducerActions = LanguageEn | LanguageEs | DarkModeOn | DarkModeOff;