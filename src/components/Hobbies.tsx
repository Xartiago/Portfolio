/* Custom Hooks */
import { useDarkMode } from "../hooks/useDarkMode"
import { useLanguage } from "../hooks/useLanguage"
import { HobArr } from "../mock/MockHobbies"
/* Styled Components */
import { MiniTitles, Second } from "../styles"
import { Dots } from "../styles/About"
import { ContPerHobb } from "../styles/Hobbies"
import { Container } from "../styles/Projects"
import { Hobby } from "./Hobby"

export const Hobbies = () => {
    const { DarkMode } = useDarkMode()
    const { Language } = useLanguage()
    return (
        <Container DM={DarkMode} id='Hobbies'>
            <MiniTitles>
                <Dots />
                <Second DM={DarkMode}>{Language === 'En' ? 'Hobbies' : 'Pasatiempos'}</Second>
            </MiniTitles>
            <ContPerHobb>
                {HobArr.map(hobby => <Hobby key={hobby.id} img={hobby.img} title={Language === 'En' ? hobby.descrEn : hobby.descrEs}/>)}
            </ContPerHobb>
        </Container>
    )
}
