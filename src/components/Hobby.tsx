import { BsChevronDoubleDown } from "react-icons/bs"
import { useDarkMode } from "../hooks/useDarkMode"
import { Down } from "../styles"
import { Image } from "../styles/Hobbies"

interface propsI {
    img: any;
}

export const Hobby = ({ img }: propsI) => {
    const { DarkMode } = useDarkMode()

    return (
        <Image Img={img} >
        </Image>
    )
}
