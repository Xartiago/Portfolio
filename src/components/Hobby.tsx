import { Down } from "../styles";
import { HobTitle, Image } from "../styles/Hobbies";

interface propsI {
    img: any;
    title: string;
}

export const Hobby = ({ img, title }: propsI) => {
    return (
        <Image Img={img} >
            <HobTitle>{title}</HobTitle>
        </Image>
    )
}
