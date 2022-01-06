import styled, { keyframes } from "styled-components";
/* Interfaces & Types */
import { StysI } from '../interfaces/interfaces'
/* Colors */
import { AzulOscuro, Blanco, Celeste, Gris, Lila, Negro } from './colors'
/* Animations */
const ScrollDown = keyframes`
    0% {    transform: translate(0, 0);  }
    50% {    transform: translate(0, 30%);  }
    100% {    transform: translate(0, 0%);  
`
/* React Icons styles */
export const Down = styled.span`
    margin: 0 0 10px;
    position: absolute;
    bottom: 0;
    animation: ${ScrollDown} infinite 2s cubic-bezier(.58,.58,.69,1.06);
    @media (min-width: 768px) {
        margin: 0 0 20px;
    }
    @media (min-width: 1180px) {
        margin: 0 0 25px;
    }
`
/* Titles, Subtitles & Paragraphs */
export const First = styled.h1`
    font-size: 24px;
    text-align: center;
    color: ${(props: StysI) => props.DM ? Blanco : Negro};
    @media (min-width: 768px) {
        font-size: 30px;
    }
    @media (min-width: 1180px) {
        font-size: 35px;
    }
`
export const Second = styled.h2`
    font-size: 22px;
    color: ${(props: StysI) => props.DM ? Blanco : Negro};
    @media (min-width: 768px) {
        font-size: 26px;
    }
`
export const Subtitle1 = styled.h3`
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    color: ${(props: StysI) => props.DM ? Blanco : Negro};
    @media (min-width: 768px) {
        font-size: 24px;
    }
    @media (min-width: 1180px) {
        font-size: 29px;
    }
`
export const SubItalicT = styled.h3`
    margin: 5px 0 10px;
    font-size: 16px;
    font-weight: 500;
    font-style: italic;
    text-align: center;
    color: ${(props: StysI) => props.DM ? Blanco : Negro};
    @media (min-width: 768px) {
        font-size: 20px;
    }
    @media (min-width: 1180px) {
        font-size: 23px;
    }
`
export const Text = styled.p`

`
/* Main Container */
export const Container = styled.div`
    position: relative;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background: ${(props: StysI) => props.DM ? Negro : Blanco};
`
/* --ABSOLUTE CONTROLLERS -- */
/* Container */
export const AbsCont = styled.div`
    z-index: 10;
    position: sticky;
    top: 20px;
`
export const DarkModeController = styled.div`
    display: none;
    @media (min-width: 768px) {
        position: absolute;
        margin: 0 10px;
        display: flex;
        flex-direction: column;
        right: 0;
        margin: 0 20px;
    }
`
export const LangControl = styled.h3`
    margin-top: 5px;
    font-size: 20px;
    text-align: center;
    cursor: pointer;
    color: ${(props: StysI) => props.DM ? Blanco : Negro};
    @media (min-width: 768px) {
        font-size: 20px;
    }
`