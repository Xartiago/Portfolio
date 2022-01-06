import styled from "styled-components";
import dots from '../assets/icons/dots.svg'
import Avatar from '../assets/icons/avatarN.svg'
import { StysI } from "../interfaces/interfaces";
import { AzulOscuro, Blanco, Celeste, Gris, GrisClaro, GrisOscuro, Negro } from "./colors";

/* About */
/* About flex components */
export const Dots = styled.div`
    z-index: -1;    
    position: absolute;
    top: 0;
    left: 0; 
    height: 30px;
    width: 30px;
    background-image: url(${dots});
    background-repeat: none;
`
export const Profile = styled.div`
    width: 150px; height: 150px;
    margin: 50px 0 30px;
    background-image: url(${Avatar});
    background-repeat: none;
`
export const DownloadButton = styled.a`
    padding: 5px 20px;;
    margin-bottom: 10px;
    background-color: ${Gris};
    border-radius: 13px;
`
export const TextContainer = styled.div`
    text-align: center;
    border-radius: 20px;
    background-color: ${(props: StysI) => props.DM ? GrisOscuro : GrisClaro};
    color: ${(props: StysI) => props.DM ? Blanco : Negro};
`
export const ProfileCont = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`