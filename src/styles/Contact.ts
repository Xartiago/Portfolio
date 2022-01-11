import styled from "styled-components";
import { StysI } from "../interfaces/interfaces";
import { Blanco, Gris, GrisClaro, GrisOscuro, Negro } from "./colors";

export const FormCont = styled.div`
    margin: 30px auto 100px;
    padding: 20px 40px;
    background-color: ${(props: StysI) => props.DM ? GrisOscuro : GrisClaro};
    border-radius: 30px;
`
export const Form = styled.form`
    padding-bottom: 30px;
    display: flex;
    flex-direction: column;
`
export const Label = styled.label`
    display: flex;
    flex-direction: column;
    color: ${(props: StysI) => props.DM ? Blanco : Negro};
    font-size: 20px;
`
export const Input = styled.input`
    padding: 5px 10px;
    font-size: 14px;
    background: #fff;
    color: ${Negro};
    border: none;
    font-family: 'Poppins';
    border-radius: 7px;
    max-width: 600px;
`
export const Input2 = styled.textarea`
    padding: 5px 10px;
    margin-bottom: 10px;
    height: 200px;
    background: #fff
    color: ${(props: StysI) => props.DM ? Blanco : Negro};
    border: none;
    font-family: 'Poppins';
    border-radius: 7px;
`
export const ButtonSubmit = styled.button`

`