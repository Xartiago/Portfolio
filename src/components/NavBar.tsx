/* React Icons */
import { IoHomeOutline } from 'react-icons/io5'
import { IoIosList } from 'react-icons/io'
import { BsPerson } from 'react-icons/bs'
import { BiBrain } from 'react-icons/bi'
import { VscTools } from 'react-icons/vsc'
import { MdOutlineGames, MdOutlineConnectWithoutContact, MdMenu, MdMenuOpen } from 'react-icons/md'
/* React Hooks */
import { useState } from 'react'
/* Styled Components */
import { Controller, MenuContainer, NavContainer } from '../styles/Navbar'
/* Colors */
import { Blanco, Negro } from '../styles/colors'
import { useDarkMode } from '../hooks/useDarkMode'

export const NavBar = () => {
    const { DarkMode } = useDarkMode()
    const [menu, setMenu] = useState<boolean>(false); /* This state control the menu (Open, close) */
    const openMenu = (): void => setMenu(true);
    const closeMenu = (): void => setMenu(false);

    return (
        <NavContainer DM={DarkMode}>
            <Controller>
                {menu ? <MdMenuOpen size='40' onClick={closeMenu} color={DarkMode ? Blanco : Negro} className='menuicons' /> : <MdMenu size='40' onClick={openMenu} color={DarkMode ? Blanco : Negro} className='menuicons' />}
            </Controller>
            {
                menu ? <>
                    <MenuContainer Menu={menu}>
                        <IoHomeOutline size='38' color={DarkMode ? Blanco : Negro} className='menuicons' />
                        <BsPerson size='48' color={DarkMode ? Blanco : Negro} className='menuicons' />
                        <IoIosList size='38' color={DarkMode ? Blanco : Negro} className='menuicons' />
                        <BiBrain size='45' color={DarkMode ? Blanco : Negro} className='menuicons' />
                        <VscTools size='40' color={DarkMode ? Blanco : Negro} className='menuicons' />
                        <MdOutlineGames size='40' color={DarkMode ? Blanco : Negro} className='menuicons' />
                        <MdOutlineConnectWithoutContact size='40' color={DarkMode ? Blanco : Negro} className='menuicons' />
                    </MenuContainer>
                </>
                    :
                    <></>
            }
            <MenuContainer>
                <IoHomeOutline size='38' color={DarkMode ? Blanco : Negro} className='menuicons' />
                <BsPerson size='48' color={DarkMode ? Blanco : Negro} className='menuicons' />
                <IoIosList size='38' color={DarkMode ? Blanco : Negro} className='menuicons' />
                <BiBrain size='45' color={DarkMode ? Blanco : Negro} className='menuicons' />
                <VscTools size='40' color={DarkMode ? Blanco : Negro} className='menuicons' />
                <MdOutlineGames size='40' color={DarkMode ? Blanco : Negro} className='menuicons' />
                <MdOutlineConnectWithoutContact size='40' color={DarkMode ? Blanco : Negro} className='menuicons' />
            </MenuContainer>
        </NavContainer>
    )
}
