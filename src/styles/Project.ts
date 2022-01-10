import styled from "styled-components";
import { ProjImgI } from "../interfaces/interfaces";

/* Project Component */
export const Container = styled.div`
    width: 100%;
    box-shadow: -3px -1px 39px 12px rgba(0,0,0,0.1);
    border-radius: 12px;
`
export const TitleC = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`
export const Img = styled.div`
    width: 100%;
    height: 200px;
    background: url(${(props: ProjImgI) => props.Img ? props.Img : ''}) no-repeat center;
    background-size: cover;
    @media(min-width: 1440px){
        height: 300px;
    }
`