/* Custom Hook */
import { useDarkMode } from '../hooks/useDarkMode';
/* Styled Components */
import {Container, Down, First, SubItalicT, Subtitle1} from '../styles'
import { HomeBackground, Mark, Networks } from '../styles/Home';
/* React Icons */
import { BsChevronDoubleDown } from 'react-icons/bs';
import { AiFillYoutube, AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";



export const Home = () => {
    const { DarkMode } = useDarkMode()
    return (
        <Container DM={DarkMode} id='Home'>
            <HomeBackground>
                <Mark DM={DarkMode} />
                <First DM={DarkMode}>Santiago Salcedo Camacho</First>
                <Subtitle1 DM={DarkMode}>JS/TS Full Stack Developer</Subtitle1>
                <SubItalicT DM={DarkMode}>(Xartiago)</SubItalicT>
                <Networks>
                    <a href="https://www.linkedin.com/in/santiago-salcedo-camacho-281a46222/" target='_blank'>
                        <AiFillLinkedin size='38' className='networks linkdin' />
                    </a>
                    <a href="https://www.youtube.com/channel/UCT4K2p9PnR9HsjBVjE_UiRg" target='_blank'>
                        <AiFillYoutube size='38' className='networks yt' />
                    </a>
                    <a href="https://www.instagram.com/xartyago/" target='_blank'>
                        <AiFillInstagram size='38' className='networks ig' />
                    </a>
                    <a href="https://github.com/Xartiago" target='_blank'>
                        <AiFillGithub size='38' className={`${DarkMode ? 'networks gh' : 'networks ghl'}`} />
                    </a>
                </Networks>
                <Down DM={DarkMode}>
                    <a href='#About' > {DarkMode ? <BsChevronDoubleDown color='white' /> : <BsChevronDoubleDown />} </a>
                </Down>
            </HomeBackground>
        </Container>
    )
}
