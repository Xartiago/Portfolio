/* Custom Hooks */
import { useDarkMode } from "../hooks/useDarkMode"
import { useLanguage } from "../hooks/useLanguage"
/* Styled Components */
import { Dots } from "../styles/About"
import { Container3, MiniTitles, Second } from "../styles"
import { GridContainer } from "../styles/Techs"
/* React Icons */
import { SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiTypescript, SiReact, SiRedux, SiExpress, SiMongodb, SiPostgresql, SiSequelize, SiFirebase } from 'react-icons/si'
import { IoLogoNodejs } from 'react-icons/io'
/* Colors */
import { AzulOscuro, Celeste } from "../styles/colors"

export const Techs = () => {
    const { DarkMode } = useDarkMode()
    const { Language } = useLanguage()
    return (
        <Container3 DM={DarkMode} id='Technologies'>
            <MiniTitles>
                <Dots />
                <Second DM={DarkMode}>{Language === 'En' ? 'Technologies' : 'Tecnologias'}</Second>
            </MiniTitles>
            <GridContainer>
                <SiHtml5 size='80' color={DarkMode ? Celeste : AzulOscuro} />
                <SiCss3 size='80' color={DarkMode ? Celeste : AzulOscuro} />
                <SiTailwindcss size='80' color={DarkMode ? Celeste : AzulOscuro} />
                <SiJavascript size='80' color={DarkMode ? Celeste : AzulOscuro} />
                <SiTypescript size='80' color={DarkMode ? Celeste : AzulOscuro} />
                <SiReact size='80' color={DarkMode ? Celeste : AzulOscuro} />
                <SiRedux size='80' color={DarkMode ? Celeste : AzulOscuro} />
                <IoLogoNodejs size='85' color={DarkMode ? Celeste : AzulOscuro} />
                <SiExpress size='85' color={DarkMode ? Celeste : AzulOscuro} />
                <SiSequelize size='85' color={DarkMode ? Celeste : AzulOscuro} />
                <SiMongodb size='85' color={DarkMode ? Celeste : AzulOscuro} />
                <SiPostgresql size='85' color={DarkMode ? Celeste : AzulOscuro} />
                <SiFirebase size='85' color={DarkMode ? Celeste : AzulOscuro} />
            </GridContainer>
        </Container3>
    )
}
