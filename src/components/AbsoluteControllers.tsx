/* Styled Components */
import { AbsCont, DarkModeController, LangControl } from "../styles"
/* Custom Hooks */
import { useDarkMode } from "../hooks/useDarkMode"
import { useLanguage } from "../hooks/useLanguage"
/* React Icons */
import { FaRegMoon, FaRegSun } from 'react-icons/fa'
import { BsFillSunFill } from 'react-icons/bs'

export const AbsoluteControllers = () => {
    const { DMOn, DMOff, DarkMode } = useDarkMode()
    const { LanEn, LanEs, Language } = useLanguage()
    return (
        <AbsCont>
            <DarkModeController>
                {
                    DarkMode ? <BsFillSunFill size='25px' color='#fff' className="controler" onClick={DMOff} />
                        : <FaRegMoon size='25px' color='#222831' className="controler" onClick={DMOn} />
                }
                {
                    Language === 'Es' ? <LangControl DM={DarkMode} onClick={LanEn}>ES</LangControl>
                        : <LangControl DM={DarkMode} onClick={LanEs}>EN</LangControl>
                }
            </DarkModeController>
        </AbsCont>
    )
}
