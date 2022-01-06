import { useDarkMode } from "../hooks/useDarkMode"
import { useLanguage } from "../hooks/useLanguage"
import { AbsCont, Container } from "../styles"
import { ProfileCont } from "../styles/About"

export const About = () => {
    const { DarkMode } = useDarkMode()
    const { Language } = useLanguage()

    return (
        <Container DM={DarkMode} id='About'>
            <ProfileCont>

            </ProfileCont>
        </Container>
    )
}
