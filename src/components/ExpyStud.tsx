/* Custom Hooks */
import { useDarkMode } from "../hooks/useDarkMode"
import { useLanguage } from "../hooks/useLanguage"
/* Styled Components */
import { Container3, MiniTitles, Second } from "../styles"
import { Dots } from "../styles/About"
import { ExpYStudC, InfoCont } from "../styles/ExpyStud"
/* Icons */
import { FaGraduationCap, FaToolbox } from 'react-icons/fa'

export const ExpyStud = () => {
    const { DarkMode } = useDarkMode()
    const { Language } = useLanguage()
    return (
        <Container3 DM={DarkMode} id='Experience'>
            <MiniTitles>
                <Dots />
                <Second DM={DarkMode}>{Language === 'En' ? 'Experience' : 'Experiencia'}</Second>
            </MiniTitles>
            <ExpYStudC>
                <InfoCont DM={DarkMode}>

                </InfoCont>
                <InfoCont DM={DarkMode}>

                </InfoCont>
            </ExpYStudC>
        </Container3>
    )
}
