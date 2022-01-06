import styled, { keyframes } from "styled-components"
/* Mark */
import whiteMark from '../assets/icons/whiteMark.svg';
import blackMark from '../assets/icons/blackMark.svg';
import { StysI } from "../interfaces/interfaces";

/* -- HOME -- */
/* Personal Brand */
const rotate = keyframes`
     0% {    transform: rotate(0deg);  }
    100% {    transform: rotate(179.9deg);  }
`;
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
    @media (min-width: 1180px) {
        width: 118px;
        height: 160px;
    }
`
export const HomeBackground = styled.div`
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`
export const Networks = styled.div`
  margin: 10px;
  width: 170px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`