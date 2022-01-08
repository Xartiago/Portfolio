import styled from "styled-components";
import { StysI } from "../interfaces/interfaces";
import { GrisClaro, GrisOscuro } from "./colors";

/* --Experience & Study */
/* Containers */
export const ExpYStudC = styled.div`
    display: flex;
    margin: 25px 0;
    flex-direction: column;
    @media(min-width: 1000px){
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
`
export const InfoCont = styled.div`
    margin: 20px 0;
    background-color: ${(props: StysI) => props.DM ? GrisOscuro : GrisClaro};
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    border-radius: 13px;
    height: 400px;
    @media(min-width: 1000px){
        width: 600px;
    }
`