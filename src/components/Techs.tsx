/* Custom Hooks */
import { useDarkMode } from "../hooks/useDarkMode"
import { useLanguage } from "../hooks/useLanguage"
import { Container } from "../styles/Techs"
/* Styled Components */
import { Dots } from "../styles/About"

export const Techs = () => {
    const { DarkMode } = useDarkMode()
    const { Language } = useLanguage()
    console.log(DarkMode)
    return (
        <Container DM={DarkMode}>

        </Container>
    )
}
