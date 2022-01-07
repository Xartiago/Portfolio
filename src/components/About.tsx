import { useDarkMode } from "../hooks/useDarkMode"
import { useLanguage } from "../hooks/useLanguage"
import { Container2, MiniTitles, Paragraph, Second } from "../styles"
import { BrandLogos, Dots, Logotype, Logotype2, PersBrand, Profile, ProfileCont, TextContainer } from "../styles/About"
import CV from '../assets/CV.pdf'
import CVE from '../assets/CVE.pdf'

export const About = () => {
    const { DarkMode } = useDarkMode()
    const { Language } = useLanguage()

    return (
        <Container2 DM={DarkMode} id='About'>
            <MiniTitles>
                <Dots />
                <Second DM={DarkMode}>{Language === 'En' ? 'About Me' : 'Sobre Mi'}</Second>
            </MiniTitles>
            <ProfileCont>
                <Profile />
                <TextContainer DM={DarkMode}>
                    <Paragraph DM={DarkMode}>
                        {Language === 'En' ?
                            'My name is Santiago Salcedo Camacho, I am a young man from Yopal / Casanare (Colombia) passionate about technology and its various fields, currently in which I perform best is developing software for webs; I am constantly learning new technologies / libraries and exploring information related to it, in the same way I like to teach what I know, and collaborate in the development of team projects!'
                            : 'Mi nombre es Santiago Salcedo Camacho, soy un joven de Yopal/Casanare (Colombia) apasionado por la tecnologia y sus diversos campos, actualmente en el cual me desempeño mejor es desarrollando software para webs; constantemente me encuentro aprendiendo nuevas tecnologias/librerias y explorando informacion relacionada con este, de la misma forma me agrada enseñar lo que se, y colaborar en el desarrollo de proyectos en equipo!'
                        }
                    </Paragraph>
                </TextContainer>
            </ProfileCont>
            <PersBrand DM={DarkMode}>
                <BrandLogos>
                    <Logotype DM={DarkMode} />
                    <Logotype2 DM={DarkMode} />
                </BrandLogos>
                <Paragraph DM={DarkMode}>
                    {Language === 'En' ?
                        <b>My Personal Brand is an X in the shape of an hourglass</b>
                        : <b>Mi Marca Personal es una X con forma de reloj de arena</b>
                    }
                </Paragraph>
            </PersBrand>
        </Container2>
    )
}
