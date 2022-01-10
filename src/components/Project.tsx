import { GoPrimitiveDot } from "react-icons/go"
import { useDarkMode } from "../hooks/useDarkMode"
import { SubItalicT } from "../styles"
import { Purpura, Verde } from "../styles/colors"
import { Container, Img, TitleC } from "../styles/Project"

interface propsI {
    img: any;
    title: string;
    how: string;
}

export const Project = ({ img, title, how }: propsI) => {
    const { DarkMode } = useDarkMode()
    return (
        <Container>
            <TitleC>
                <GoPrimitiveDot size={23} color={how === 'Individual' ? Verde : Purpura} />
                <SubItalicT DM={DarkMode} >
                    {title}
                </SubItalicT>
            </TitleC>
            <Img Img={img} />
        </Container>
    )
}
