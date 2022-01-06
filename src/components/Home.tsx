/* Custom Hook */
import { useDarkMode } from '../hooks/useDarkMode';
/* Styled Components */
import { Down, First, HomeBackground, Mark, Networks, SubItalicT, Subtitle1 } from '../styles';
/* React Icons */
import { BsChevronDoubleDown } from 'react-icons/bs';
import { AiFillYoutube, AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";


export const Home = () => {
    const { DarkMode } = useDarkMode()
    return (
        <HomeBackground DM={DarkMode} id='Home'>
            <Mark DM={DarkMode} />
            <First DM={DarkMode}>Santiago Salcedo Camacho</First>
            <Subtitle1 DM={DarkMode}>JS/TS Full Stack Developer</Subtitle1>
            <SubItalicT DM={DarkMode}>(Xartiago)</SubItalicT>
            <Networks>
                <a href="https://www.linkedin.com/in/santiago-salcedo-camacho-281a46222/" target='_blank'>
                    <AiFillLinkedin size='32' className='networks linkdin' />
                </a>
                <a href="https://www.youtube.com/channel/UCT4K2p9PnR9HsjBVjE_UiRg" target='_blank'>
                    <AiFillYoutube size='32' className='networks yt'/>
                </a>
                <a href="https://www.instagram.com/xartyago/" target='_blank'>
                    <AiFillInstagram size='32' className='networks ig'/>
                </a>
                <a href="https://github.com/Xartiago" target='_blank'>
                    <AiFillGithub size='32' className={`${DarkMode ? 'networks gh' : 'networks ghl' }`} />
                </a>
            </Networks>
            <Down>
                <a href="#About"> {DarkMode ? <BsChevronDoubleDown color='white' /> : <BsChevronDoubleDown/> }</a>
            </Down>
        </HomeBackground>
    )
}
