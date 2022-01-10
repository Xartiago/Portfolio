/* Custom Hooks */
import { useDarkMode } from "../hooks/useDarkMode"
import { useLanguage } from "../hooks/useLanguage"
/* Styled Components */
import { MiniTitles, Second } from "../styles"
import { Dots } from "../styles/About"
import { Container } from "../styles/Projects"

export const Hobbies = () => {
    const { DarkMode } = useDarkMode()
    const { Language } = useLanguage()
    return (
        <Container DM={DarkMode} id='Hobbies'>
            <MiniTitles>
                <Dots />
                <Second DM={DarkMode}>{Language === 'En' ? 'Hobbies' : 'Pasatiempos'}</Second>
            </MiniTitles>
        </Container>
    )
}
