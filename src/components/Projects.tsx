/* Custom Hooks */
import { useDarkMode } from "../hooks/useDarkMode"
import { useLanguage } from "../hooks/useLanguage"

export const Projects = () => {
    const { Language } = useLanguage()
    const { DarkMode } = useDarkMode()
    return (
        <div>

        </div>
    )
}
