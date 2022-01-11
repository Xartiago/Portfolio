/* Custom Hooks */
import { useDarkMode } from "../hooks/useDarkMode"
import { useLanguage } from "../hooks/useLanguage"
/* Styled Components */
import { MiniTitles, Second } from "../styles"
import { Dots } from "../styles/About"
import { ButtonSubmit, Form, FormCont, Input, Input2, Label } from "../styles/Contact"
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

export const Contact = () => {
    /* Custom Hooks Vs */
    const { DarkMode } = useDarkMode()
    const { Language } = useLanguage()
    /* Form */
    const { register, handleSubmit } = useForm<Mail>()
    /* Hooks */
    const [success, setSuccess] = useState<boolean | null>(null)

    const submit = (data: Mail) => {
        send('service_jdwbubu', 'template_ur0wks2', data).then(d => setSuccess(true)).catch(d => setSuccess(false))
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
                        Name
                        <Input 
                            type='text'
                            id='name'
                            {...register('name')}
                            placeholder="Name"
                        />
                    </Label>
                    <Label DM={DarkMode}>
                        E-mail
                        <Input 
                            type='email'
                            id="email"
                            {...register('email')}
                            placeholder="Email"
                        />
                    </Label>
                    <Label DM={DarkMode}>
                        Message
                        <Input2 DM={DarkMode}
                            id="message"
                            {...register('message')}
                            placeholder="Message"
                        />
                    </Label>
                    <ButtonSubmit>Enviar</ButtonSubmit>
                </Form>
            </FormCont>
        </Container>
    )
}
