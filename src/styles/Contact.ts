import styled from "styled-components";
import { StysI } from "../interfaces/interfaces";
import { AzulOscuro, Blanco, Celeste, Gris, GrisClaro, GrisOscuro, Negro, Rojo, Verde } from "./colors";

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
    font-weight: bold;
`
interface Errors{
    e: null | boolean
}
export const Input = styled.input`
    margin: 10px 0;    
    padding: 5px 10px;
    font-size: 14px;
    background: #fff;
    color: ${Negro};
    font-weight: bold;
    border: none;
    font-family: 'Poppins';
    border-radius: 7px;
`
export const Input2 = styled.textarea`
    padding: 5px 10px;
    margin: 10px 0;
    height: 150px;
    color: ${Negro};
    background: #fff
    border: none;
    font-family: 'Poppins';
    border-radius: 7px;
`
interface success {
    s: boolean | null;
}
export const ButtonSubmit = styled.button`
    height: 40px;
    font-size: 16px;
    font-family: 'Poppins';
    font-weight: bold;
    background-color: ${(props: success) => props.s === null ? AzulOscuro : props.s === true ? Verde : Rojo};
    color: ${(props: success) => props.s === null ? Blanco : Negro};
    border-radius: 10px;
    border: none;
    cursor: ${(props: success) => props.s === null ? 'pointer' : 'not-allowed'};
`
export const Errors = styled.span`
    font-size: 13px;
    color: ${Rojo};
`