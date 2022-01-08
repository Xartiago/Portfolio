import styled from "styled-components";
import { StysI } from "../interfaces/interfaces";
import { Blanco, Negro } from "./colors";

/* -- Techs Components -- */
/* Container */
export const Container = styled.div`
    width: 100%;
    height: 300px;
    background-color: ${(props: StysI) => props.DM ? Negro : Blanco};
`