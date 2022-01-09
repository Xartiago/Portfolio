/* Custom Hooks */
import { useDarkMode } from "../hooks/useDarkMode"
import { useLanguage } from "../hooks/useLanguage"
/* Styled Components */
import { MiniTitles, Second } from "../styles"
import { Dots } from "../styles/About"
import { Container, Input, Inputs, Parag1, Select, SelectC, TypeProC, TypeProject } from "../styles/Projects"
import { Purpura, Verde } from "../styles/colors"
import { Parag } from "../styles/ExpyStud"
/* React Icons */
import { GoPrimitiveDot } from 'react-icons/go'

export const Projects = () => {
    const { Language } = useLanguage()
    const { DarkMode } = useDarkMode()
    return (
        <Container DM={DarkMode} id='Projects'>
            <MiniTitles>
                <Dots />
                <Second DM={DarkMode}>{Language === 'En' ? 'Projects' : 'Proyectos'}</Second>
            </MiniTitles>
            <SelectC DM={DarkMode}>
                <Select DM={DarkMode} name="cars" id="cars">
                    <option value="All">All</option>
                    <option value="Full-Stack">Full-Stack</option>
                    <option value="Front-end">Front</option>
                    <option value="Back-end">Back</option>
                    <option value="Games">Games</option>
                </Select>
                <Inputs>
                    <TypeProject>
                        <Input DM={DarkMode} type='radio' checked />
                        <Parag1 DM={DarkMode}>All</Parag1>
                    </TypeProject>
                    <TypeProject>
                        <Input DM={DarkMode} type='radio' />
                        <Parag1 DM={DarkMode}>Full-Stack</Parag1>
                    </TypeProject>
                    <TypeProject>
                        <Input DM={DarkMode} type='radio' />
                        <Parag1 DM={DarkMode}>Front</Parag1>
                    </TypeProject>
                    <TypeProject>
                        <Input DM={DarkMode} type='radio' />
                        <Parag1 DM={DarkMode}>Back</Parag1>
                    </TypeProject>
                    <TypeProject>
                        <Input DM={DarkMode} type='radio' />
                        <Parag1 DM={DarkMode}>Games</Parag1>
                    </TypeProject>
                </Inputs>
                <TypeProC>
                    <TypeProject>
                        <GoPrimitiveDot size={12} color={Verde} />
                        <Parag DM={DarkMode}>{Language === 'En' ? 'Individual' : 'Individual'}</Parag>
                    </TypeProject>
                    <TypeProject>
                        <GoPrimitiveDot size={12} color={Purpura} />
                        <Parag DM={DarkMode}>{Language === 'En' ? 'Team' : 'Equipo'}</Parag>
                    </TypeProject>
                </TypeProC>
            </SelectC>
        </Container>
    )
}
