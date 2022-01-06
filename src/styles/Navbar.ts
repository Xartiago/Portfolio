import styled from "styled-components";
import { MenStI, StysI } from "../interfaces/interfaces";
import { Blanco, Negro } from "./colors";

export const NavContainer = styled.div`
    position: fixed;
    z-index: 10;
    top: 0px;
    left: 10px;
    background: ${(props: StysI) => props.DM ? Negro : Blanco};
    @media(min-width: 768px){   
        position: sticky;
        z-index: 10;
        top: 10px;
    }
`
export const Controller = styled.div`
    position: absolute;
    @media (min-width: 768px) {
        display: none;
    }
`
export const MenuContainer = styled.div`
    display: ${(props: MenStI) => props.Menu ? 'flex' : 'none'};
    margin: ${(props: MenStI) => props.Menu ? '60px 0' : 0};
    flex-direction: column;
    @media (min-width: 768px) {
        height: 100vh;
        position:absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        alignt-items: center;
        padding: 10px; 
    }
`