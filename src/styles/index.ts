import styled from "styled-components";

/* Colors */
const Celeste = '#69bdc4';
const Lila = '#a0dfd2';
const AzulOscuro = '#061d23';
const Gris = '#737a7b';
const Blanco = '#e5e5e5';
const Negro = '#060606'

interface StysI {
    DM?: Boolean;
}

/* Home */
export const HomeBackground = styled.div`
    width: 100%;
    height: 100vh;
    background: ${(props: StysI) => props.DM ? Negro : Blanco};
`

/* About */
/* About flex components */
export const ProfileCont = styled.div`
    display: flex;
    height: 190px;
    background-color: ${Lila};
    margin: 10px;
`