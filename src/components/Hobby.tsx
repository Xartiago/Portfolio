import { useDarkMode } from "../hooks/useDarkMode"
import { Img } from "../styles/Project"

interface propsI {
    img: any;
}

export const Hobby = ({ img }: propsI) => {
    const { DarkMode } = useDarkMode()

    return (
        <div>
            <Img Img={img} />
        </div>
    )
}
