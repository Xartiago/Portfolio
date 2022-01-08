/* Custom Hooks */
import { useDarkMode } from "../hooks/useDarkMode"
import { useLanguage } from "../hooks/useLanguage"
/* Styled Components */
import { Container3, MiniTitles, Second, SubItalicT } from "../styles"
import { Dots } from "../styles/About"
import { ExpYStudC, IconC, Info, InfoCont, Parag, StyOExpC, Titles, Year } from "../styles/ExpyStud"
/* Icons */
import { FaGraduationCap, FaToolbox } from 'react-icons/fa'
import { ExpArr, StyArr } from "../mock/MockEYSC"
import { Blanco, Negro } from "../styles/colors"

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
                    {StyArr.map(study => {
                        const { id, descriptionEn, descriptionEs, titleEn, titleES, year } = study;
                        return <StyOExpC key={id}>
                            <IconC>
                                <FaGraduationCap size='30' color={DarkMode ? Blanco : Negro} />
                            </IconC>
                            <Info>
                                <Year>{year}</Year>
                                <Titles DM={DarkMode}>{Language === 'En' ? titleEn : titleES}</Titles>
                                <Parag DM={DarkMode}>{Language === 'En' ? descriptionEn : descriptionEs}</Parag>
                            </Info>
                        </StyOExpC>
                    })}
                </InfoCont>
                <InfoCont DM={DarkMode}>
                    {ExpArr.map(study => {
                        const { id, descriptionEn, descriptionEs, titleEn, titleES, year } = study;
                        return <StyOExpC key={id}>
                            <IconC>
                                <FaToolbox size='30' color={DarkMode ? Blanco : Negro} />
                            </IconC>
                            <Info>
                                <Year>{year}</Year>
                                <Titles DM={DarkMode}>{Language === 'En' ? titleEn : titleES}</Titles>
                                <Parag DM={DarkMode}>{Language === 'En' ? descriptionEn : descriptionEs}</Parag>
                            </Info>
                        </StyOExpC>
                    })}
                </InfoCont>
            </ExpYStudC>
        </Container3>
    )
}
