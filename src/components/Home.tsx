/* Custom Hook */
import { useDarkMode } from '../hooks/useDarkMode';
/* Styled Components */
import { Down, First, HomeBackground, Mark, Networks, SubItalicT } from '../styles';
/* React Icons */
import { BsChevronDoubleDown } from 'react-icons/bs';
import { AiFillYoutube, AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";


export const Home = () => {
    const { DarkMode } = useDarkMode()
    return (
        <HomeBackground DM={DarkMode}>
            <Mark DM={DarkMode} />
            <First DM={DarkMode}>Santiago Salcedo Camacho</First>
            <SubItalicT DM={DarkMode}>(Xartiago)</SubItalicT>
            <Networks>
                <a href="https://www.linkedin.com/in/santiago-salcedo-camacho-281a46222/" target='_blank'>
                    <AiFillLinkedin size='28' className='networks linkdin' />
                </a>
                <a href="https://www.youtube.com/channel/UCT4K2p9PnR9HsjBVjE_UiRg" target='_blank'>
                    <AiFillYoutube size='28' className='networks yt'/>
                </a>
                <a href="https://www.instagram.com/xartyago/" target='_blank'>
                    <AiFillInstagram size='28' className='networks ig'/>
                </a>
                <a href="https://github.com/Xartiago" target='_blank'>
                    <AiFillGithub size='28' className='networks gh' />
                </a>
            </Networks>
            <Down>
                <a href="#About"> {DarkMode ? <BsChevronDoubleDown color='white' /> : <BsChevronDoubleDown/> }</a>
            </Down>
        </HomeBackground>
    )
}
