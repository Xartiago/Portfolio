import styled from "styled-components";
import { StysI } from "../interfaces/interfaces";
import { Blanco, GrisClaro, GrisOscuro, Negro } from "./colors";

/* -- Projects Component -- */
export const Container = styled.div`
    z-index: 0;
    position: relative;
    padding: 40px 18px 5px;
    width: 100%;
    height: 100%;
    background: ${(props: StysI) => props.DM ? Negro : Blanco};
    @media (min-width: 768px) {
        padding: 40px 60px 5px 120px;
    }
    @media (min-width: 1180px) {
        font-size: 23px;
    }
`
export const SelectC = styled.div`
    z-index: -1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 15px 0;
    padding: 10px 10px;
    border-radius: 12px;
    background-color: ${(props: StysI) => props.DM ? GrisOscuro : GrisClaro};
    @media(min-width: 450px){
        margin: 15px 0;
        padding: 15px 20px;
    }
`
export const Select = styled.select`
    width: 40%;
    border: none;
    padding: 5px 4px 5px 15px;
    border-radius: 12px;
    border: 0.5px solid ${(props: StysI) => props.DM ? Blanco : Negro};
    background: ${(props: StysI) => props.DM ? Negro : Blanco};
    color: ${(props: StysI) => props.DM ? Blanco : Negro};
    @media(min-width: 450px){
        width: 60%;
    }
    @media(min-width: 870px){
        display: none;
    }
`
export const Inputs = styled.div`
    display: none;
    @media(min-width: 870px){
        display: flex;
        width: 70%;
        justify-content: space-between;
    }
    @media(min-width: 1000px){
        display: flex;
        width: 60%;
        justify-content: space-between;
    }
    @media(min-width: 1400px){
        display: flex;
        width: 50%;
        justify-content: space-between;
    }
`
export const TypeProC = styled.div`
    display:flex;
`
export const TypeProject = styled.div`
    margin-left: 10px;
    display: flex;
    align-items: center;
`
export const Parag1 = styled.p`
    font-size: 16px;
    cursor: pointer;
    margin-left: 10px;
    color: ${(props: StysI) => props.DM ? Blanco : Negro};
    @media(min-width: 800px){
        font-size: 18px
    }
`
export const ContPerProj = styled.div`
    margin-bottom: 30px;
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 10px;
    justify-content: center;
    @media(min-width: 750px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media(min-width: 1440px){
        grid-template-columns: repeat(3, 1fr);
    }
`