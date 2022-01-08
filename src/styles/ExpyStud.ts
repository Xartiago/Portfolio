import styled from "styled-components";
import { StysI } from "../interfaces/interfaces";
import { Blanco, Celeste, Gris, GrisClaro, GrisOscuro, Negro } from "./colors";

/* --Experience & Study */
/* Containers */
export const ExpYStudC = styled.div`
    display: flex;
    margin: 25px 0 0;
    flex-direction: column;
    @media(min-width: 1000px){
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
`
export const InfoCont = styled.div`
    margin: 10px 0px;
    padding: 15px;
    background-color: ${(props: StysI) => props.DM ? GrisOscuro : GrisClaro};
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    border-radius: 13px;
    @media(min-width: 768px){
        padding: 15px 25px;
    }
    @media(min-width: 1000px){
        width: 600px;
    }
    @media(min-width: 1700px){
        width: 700px;
    }
    @media(min-width: 1800px){
        width: 770px;
    }
`
export const StyOExpC = styled.div`
    display: flex;
    margin: 20px 10px;
`
export const IconC = styled.div`
    width: 19;%
`
export const Info = styled.div`
    margin-left: 15px;
`
/* Text & Titles */
export const Titles = styled.h3`
    z-index: 10;
    margin: 5px 0 10px;
    font-size: 19px;
    font-weight: 700;
    color: ${(props: StysI) => props.DM ? Blanco : Negro};
    @media (min-width: 768px) {
        font-size: 18px;
    }
    @media (min-width: 1450px) {
        font-size: 25px;
    }
`
export const Year = styled.h4`
    font-size: 14px;
    color: ${Celeste};
`
export const Parag = styled.p`
    width: 100%;
    font-size: 16px;
    text-align: justify;
    color: ${(props: StysI) => props.DM ? Blanco : Gris};
`