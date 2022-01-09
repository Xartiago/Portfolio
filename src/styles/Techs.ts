import styled from "styled-components";
import { StysI } from "../interfaces/interfaces";
import { Blanco, Negro } from "./colors";

/* -- Techs Components -- */
/* Container */
export const Container = styled.div`
    width: 100%;
    height: 300px;
    background-color: ${(props: StysI) => props.DM ? Negro : Blanco};
`
export const GridContainer = styled.div`
    margin: 30px auto;
    width: 75%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 25px;
    @media(min-width: 450px){
        grid-template-columns: repeat(3, 1fr);
    }
    @media(min-width: 650px){
        grid-template-columns: repeat(4, 1fr);
    }
    @media(min-width: 1000px){
        margin: 50px auto;
        width: 90%;
        grid-template-columns: repeat(5, 1fr);
    }
    @media(min-width: 1440px){
        margin: 70px auto;
        padding-left: 100px;
        width: 90%;
        grid-template-columns: repeat(6, 1fr);
        grid-row-gap: 45px;
    }
`