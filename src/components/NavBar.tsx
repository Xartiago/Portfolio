/* React Icons */
import { IoHomeOutline } from 'react-icons/io5'
import { IoIosList } from 'react-icons/io'
import { BsFillSunFill, BsPerson } from 'react-icons/bs'
import { BiBrain } from 'react-icons/bi'
import { VscTools } from 'react-icons/vsc'
import { MdOutlineGames, MdOutlineConnectWithoutContact, MdMenu, MdMenuOpen } from 'react-icons/md'
/* React Hooks */
import { useState } from 'react'
/* Styled Components */
import { Controller, MenuContainer, MenuControllersContainer, NavContainer } from '../styles/Navbar'
/* Colors */
import { Blanco, Negro } from '../styles/colors'
import { useDarkMode } from '../hooks/useDarkMode'
import { FaRegMoon } from 'react-icons/fa'
import { LangControl } from '../styles'
import { useLanguage } from '../hooks/useLanguage'

export const NavBar = () => {
    const { DarkMode, DMOff, DMOn } = useDarkMode()
    const { Language, LanEn, LanEs } = useLanguage()

    const [menu, setMenu] = useState<boolean>(false); /* This state control the menu (Open, close) */
    const openMenu = (): void => setMenu(true);
    const closeMenu = (): void => setMenu(false);

    return (
        <NavContainer DM={DarkMode} Menu={menu}>
            <Controller>
                {menu ? <MdMenuOpen size='40' onClick={closeMenu} color={DarkMode ? Blanco : Negro} className='menuicons' /> : <MdMenu size='40' onClick={openMenu} color={DarkMode ? Blanco : Negro} className='menuicons' />}
            </Controller>
            {
                menu ? <>
                    <MenuContainer Menu={menu}>
                        <a href="#Home" onClick={closeMenu}><IoHomeOutline size='35' color={DarkMode ? Blanco : Negro} className='menuicons' /></a>
                        <a href="#About" onClick={closeMenu}><BsPerson size='40' color={DarkMode ? Blanco : Negro} className='menuicons'  /></a>
                        <a href="#Experience" onClick={closeMenu}><BiBrain size='40' color={DarkMode ? Blanco : Negro} className='menuicons'  /></a>
                        <a href="#Technologies" onClick={closeMenu}><VscTools size='36' color={DarkMode ? Blanco : Negro} className='menuicons'  /></a>
                        <a href="#Projects" onClick={closeMenu}><IoIosList size='35' color={DarkMode ? Blanco : Negro} className='menuicons'  /></a>
                        <a href="#Hoobies" onClick={closeMenu}><MdOutlineGames size='35' color={DarkMode ? Blanco : Negro} className='menuicons'  /></a>
                        <a href="#Contact" onClick={closeMenu}><MdOutlineConnectWithoutContact size='35' color={DarkMode ? Blanco : Negro} className='menuicons'  /></a>
                        <MenuControllersContainer DM={DarkMode}>
                            {
                                DarkMode ? <BsFillSunFill size='20px' color='#fff' className="controler" onClick={DMOff} />
                                    : <FaRegMoon size='20px' color='#222831' className="controler" onClick={DMOn} />
                            }
                            {
                                Language === 'Es' ? <LangControl DM={DarkMode} onClick={LanEn}>EN</LangControl>
                                    : <LangControl DM={DarkMode} onClick={LanEs}>ES</LangControl>
                            }
                        </MenuControllersContainer>
                    </MenuContainer>
                </>
                    :
                    <></>
            }
            <MenuContainer>
                <a href="#Home" onClick={closeMenu}><IoHomeOutline size='38' color={DarkMode ? Blanco : Negro} className='menuicons'  /></a>
                <a href="#About" onClick={closeMenu}><BsPerson size='48' color={DarkMode ? Blanco : Negro} className='menuicons' /></a>
                <a href="#Experience" onClick={closeMenu}><BiBrain size='45' color={DarkMode ? Blanco : Negro} className='menuicons'  /></a>
                <a href="#Technologies" onClick={closeMenu}><VscTools size='40' color={DarkMode ? Blanco : Negro} className='menuicons'  /></a>
                <a href="#Projects" onClick={closeMenu}><IoIosList size='38' color={DarkMode ? Blanco : Negro} className='menuicons'  /></a>
                <a href="#Hoobies" onClick={closeMenu}><MdOutlineGames size='40' color={DarkMode ? Blanco : Negro} className='menuicons'  /></a>
                <a href="#Contact" onClick={closeMenu}><MdOutlineConnectWithoutContact size='40' color={DarkMode ? Blanco : Negro} className='menuicons'  /></a>
            </MenuContainer>
        </NavContainer>
    )
}
