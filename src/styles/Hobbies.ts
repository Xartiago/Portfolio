import styled from "styled-components";
import { ProjImgI } from "../interfaces/interfaces";

export const ContPerHobb = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 10px;
    justify-content: center;
    @media(min-width: 1440px){
        grid-template-columns: repeat(2, 1fr);
    }
`
export const Image = styled.div`
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px 0;
    border-radius: 30px; 
    width: 100%;
    height: 200px;
    background: url(${(props: ProjImgI) => props.Img && props.Img}) no-repeat center;
    background-size: cover;
    @media(min-width: 650px){
        height: 300px;
    }
    @media(min-width: 768px){
        height: 350px;
    }
    @media(min-width: 1450px){
        height: 400px;
    }
`
export const HobTitle = styled.h3`
    font-size: 30px;
    color: white;
    @media(min-width: 650px){
        font-size: 40px;
    }
    @media(min-width: 800px){
        font-size: 50px;
    }
    @media(min-width: 1300px){
        font-size: 60px;
    }
`