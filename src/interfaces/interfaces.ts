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
export interface ProjImgI {
    Img?: string;
}
export interface TitlesI {
    id: string;
    titleEn: string;
    titleES: string;
    descriptionEn: string;
    descriptionEs: string;
    year: string;
}
export interface ProjectsI {
    id: string;
    img?: string;
    img2?: string;
    nameEn: string;
    nameEs: string;
    technologies: string;
    type: 'Full-Stack' | 'Front-end' | 'Back-end' | 'Games';
    how: 'Individual' | 'Grupal'
}
export interface HobbiesI {
    id: string;
    img: string;
    descrEn: string;
    descrEs: string;
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