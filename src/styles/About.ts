import styled from "styled-components";
import dots from '../assets/icons/dots.svg'
import Avatar from '../assets/icons/avatarN.svg'
import { StysI } from "../interfaces/interfaces";
import { Blanco, GrisClaro, GrisOscuro, Negro } from "./colors";
import Mark from '../assets/icons/Mark.svg'
import MarkN from '../assets/icons/MarkN.svg'
import whiteMark from '../assets/icons/whiteMark.svg'
import blackMark from '../assets/icons/blackMark.svg'

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
    width: 60%; height: 200px;
    margin: 50px auto 20px;
    background-image: url(${Avatar});
    background-repeat: no-repeat;
    @media(min-width: 400px){
        width: 200px; height: 200px;
    }
    @media(min-width: 500px){
        width: 200px; height: 200px;
    }
    @media(min-width: 700px){
        width: 200px; height: 200px;
    }
    @media(min-width: 1200px){
        width: 200px; height: 200px;
    }
    @media(min-width: 1400px){
        width: 250px; height: 250px
    }

`
export const TextContainer = styled.div`
    text-align: center;
    border-radius: 20px;
    background-color: ${(props: StysI) => props.DM ? GrisOscuro : GrisClaro};
    color: ${(props: StysI) => props.DM ? Blanco : Negro};
    @media(min-width: 700px){
        width: 450px;
    }
    @media(min-width: 768px){
        width: 400px;
    }
    @media(min-width: 1000px){
        width: 500px;
    }
    @media(min-width: 1200px){
        width: 600px;
    }
    @media(min-width: 1450px){
        width: 1000px;
    }
    
`
export const ProfileCont = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media(min-width: 700px){
        margin: 0 auto;
        flex-direction: row
    }
`
/* Personal Brand */
export const PersBrand = styled.div`
    margin: 30px 20px;
    display: flex;
    flex-direction: column;
    border-top: 1px solid ${(props: StysI) => props.DM ? Blanco : GrisClaro};
    @media(min-width: 540px){
        flex-direction: row-reverse;
        justify-content: center;
        align-items: center;
    }
    @media(min-width: 1080px){
        padding: 10px 30px;
    }
    @media(min-width: 1440px){
        padding: 10px 70px;
    }
`
export const BrandLogos = styled.div`
    margin: 20px auto 0;
    display: flex;
`
export const Logotype = styled.div`
    margin: 20px auto;
    width: 80px;
    height: 120px;
    background-image: url('${(props: StysI) => props.DM ? Mark : MarkN}');
    background-repeat: no-repeat;
    @media(min-width: 1080px){
        margin: 20px 0px;
        height: 200px;
        width: 120px;
    }
`

export const Logotype2 = styled.div`
    margin: 20px auto;
    width: 80px;
    height: 120px;
    background-image: url('${(props: StysI) => props.DM ? whiteMark : blackMark}');
    background-repeat: no-repeat;
    @media(min-width: 1080px){
        margin: 20px 0;
        height: 200px;
        width: 120px;
    }
`