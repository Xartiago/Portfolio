import styled from "styled-components";
import { MeDMI, MenStI, StysI } from "../interfaces/interfaces";
import { Blanco, Negro } from "./colors";

export const NavContainer = styled.div`
    position: fixed;
    z-index: 10;
    height: ${(props: MeDMI) => props.Menu ? '100vh' : 'auto'};
    top: 0px;
    padding-left: 18px;
    background: ${(props: MeDMI) => props.DM ? Negro : Blanco};
    border-right: ${(props: MeDMI) => props.DM && props.Menu ? `1px solid ${Blanco}` 
    : props.DM === false && props.Menu ? `1px solid ${Negro}`
    : 'none'
    };
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
    margin: ${(props: MenStI) => props.Menu ? '60px 15px 0 0' : '0'};
    flex-direction: column;
    @media (min-width: 768px) {
        height: 100vh;
        position:absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        alignt-items: center;
        padding: 10px 10px 10px 20px;
    }
`
export const MenuControllersContainer = styled.div`
    display: flex;
    padding: 10px 0;
    width: auto;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 19px;
    border: 1px solid ${(props: StysI) => props.DM ? Blanco : Negro};
`