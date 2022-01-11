/* Custom Hooks */
import { useDarkMode } from "../hooks/useDarkMode"
import { useLanguage } from "../hooks/useLanguage"
/* Styled Components */
import { MiniTitles, Second } from "../styles"
import { Dots } from "../styles/About"
import { ButtonSubmit, Errors, Form, FormCont, Input, Input2, Label } from "../styles/Contact"
import { Container } from "../styles/Projects"
/* React hook form */
import { useForm } from "react-hook-form"
/* EmailJs */
import { send } from '@emailjs/browser';
import { useState } from "react"

type Mail = {
    name: string;
    email: string;
    message: string;
}
const MAILMODEL = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/

export const Contact = () => {
    /* Custom Hooks Vs */
    const { DarkMode } = useDarkMode()
    const { Language } = useLanguage()
    /* Form */
    const { register, handleSubmit } = useForm<Mail>()
    /* Hooks */
    const [success, setSuccess] = useState<boolean | null>(null);
    const [nameE, setName] = useState<boolean | null>(null);
    const [mailE, setMail] = useState<boolean | null>(null);
    const [messageE, setMessage] = useState<boolean | null>(null)

    const submit = async (data: Mail) => {
        const { name, email, message } = data
        if (name !== '' && MAILMODEL.test(email) && message !== '') send('service_jdwbubu', 'template_ur0wks2', data).then(d => setSuccess(true)).catch(d => setSuccess(false))
        name !== '' ? setName(true) : setName(false)
        MAILMODEL.test(email) ? setMail(true) : setMail(false)
        message !== '' ? setMessage(true) : setMessage(false)
    };

    return (
        <Container DM={DarkMode} id="Contact">
            <MiniTitles>
                <Dots />
                <Second DM={DarkMode}>{Language === 'En' ? 'Contact Me' : 'Contacto'}</Second>
            </MiniTitles>
            <FormCont DM={DarkMode}>
                <Form onSubmit={handleSubmit(submit)}>
                    <Label DM={DarkMode}>
                        {Language === 'En' ? 'Name' : 'Nombre'}
                        {!nameE && <Errors>Ingresa un nombre</Errors>}
                        <Input
                            type='text'
                            id='name'
                            {...register('name')}
                            placeholder={Language === 'En' ? 'Name' : 'Nombre'}
                        />
                    </Label>
                    <Label DM={DarkMode}>
                        E-mail
                        {!mailE && <Errors>Ingresa un Correo electronico valido</Errors>}
                        <Input
                            type='email'
                            id="email"
                            {...register('email')}
                            placeholder='Email'
                        />
                    </Label>
                    <Label DM={DarkMode}>
                        {Language === 'En' ? 'Message' : 'Mensaje'}
                        {!mailE && <Errors>Ingresa un Mensaje</Errors>}
                        <Input2
                            id="message"
                            {...register('message')}
                            placeholder={Language === 'En' ? 'Message' : 'Mensaje'}
                        />
                    </Label>
                    <ButtonSubmit s={success}>{success === null ? 'Enviar' : success === true ? 'Correo enviado exitosamente' : 'Ha ocurrido un error en el envio...'}</ButtonSubmit>
                </Form>
            </FormCont>
        </Container>
    )
}
