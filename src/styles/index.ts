import styled, { keyframes } from "styled-components";
import whiteMark from '../assets/icons/whiteMark.svg';
import blackMark from '../assets/icons/blackMark.svg';

/* Colors */
const Celeste = '#69bdc4';
const Lila = '#00ADB5';
const AzulOscuro = '#061d23';
const Gris = '#737a7b';
const Blanco = '#EEEEEE';
const Negro = '#222831'

interface StysI {
    DM: Boolean;
}
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(179.9deg);
  }
`;
/* React Icons styles */
export const Down = styled.span`
    margin: 0 0 10px;
    position: absolute;
    bottom: 0;
`

/* Titles and Subtitles */
export const First = styled.h1`
    font-size: 24px;
    text-align: center;
    color: ${(props: StysI) => props.DM ? Blanco : Negro};
    @media (min-width: 768px) {
        font-size: 30px;
    }
`
export const Subtitle1 = styled.h3`
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    color: ${(props: StysI) => props.DM ? Blanco : Negro};
    @media (min-width: 768px) {
        font-size: 24px;
    }
`
export const SubItalicT = styled.h3`
    margin: 5px 0 10px;
    font-size: 16px;
    font-weight: 500;
    font-style: italic;
    text-align: center;
    color: ${(props: StysI) => props.DM ? Blanco : Negro};
    @media (min-width: 768px) {
        font-size: 20px;
    }
`
/* --ABSOLUTE CONTROLLERS -- */
/* Container */
export const AbsCont = styled.div`
    position: fixed;
`
/* -- HOME -- */
/* Personal Brand */
export const Mark = styled.div`
    margin: 0 0 20px;
    width: 65px;
    height: 89px;
    background-image: url('${(props: StysI) => props.DM ? whiteMark : blackMark}');
    backgroung-repeat: no-repeat;
    animation: ${rotate} infinite 4s cubic-bezier(.66,.01,.3,1);
    @media (min-width: 768px) {
        width: 90px;
        height: 123px;
    }
`
export const HomeBackground = styled.div`
    <-index: 10;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: ${(props: StysI) => props.DM ? Negro : Blanco};
`
export const Networks = styled.div`
  margin: 10px;
  width: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
/* About */
/* About flex components */
export const ProfileCont = styled.div`
    display: flex;
    height: 190px;
    margin: 10px;
`