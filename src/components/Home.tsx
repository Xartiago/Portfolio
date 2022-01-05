import { useDarkMode } from "../hooks/useDarkMode"
import { HomeBackground } from "../styles"

export const Home = () => {
    const { DarkMode } = useDarkMode()
    return (
        <HomeBackground DM={DarkMode}>

        </HomeBackground>
    )
}
