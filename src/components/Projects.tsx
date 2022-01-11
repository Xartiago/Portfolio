/* React Hooks */
import { useState } from "react"
/* Custom Hooks */
import { useDarkMode } from "../hooks/useDarkMode"
import { useLanguage } from "../hooks/useLanguage"
/* Styled Components */
import { MiniTitles, Second } from "../styles"
import { Dots } from "../styles/About"
import { Container, ContPerProj, Inputs, Parag1, Select, SelectC, TypeProC, TypeProject } from "../styles/Projects"
import { Celeste, Gris, Purpura, Verde } from "../styles/colors"
import { Parag } from "../styles/ExpyStud"
/* React Icons */
import { GoPrimitiveDot } from 'react-icons/go'
import { FaDotCircle } from 'react-icons/fa'
import { Event } from "../interfaces/interfaces"
import { ProjArr } from "../mock/MockProjects"
import { Project } from "./Project"


export const Projects = () => {
    /* Custom hooks variables */
    const { Language } = useLanguage()
    const { DarkMode } = useDarkMode()
    /* State´s Component */
    const [proyectos, setProyectos] = useState<string>('All')
    /* Functionality */
    /* Select */
    const selectHandleChange = (event: Event) => {
        const { value } = event.target
        value !== proyectos ? setProyectos(value) : null
    }
    /* onClick */
    const clickHandleChange = (value: string) => {
        value !== proyectos ? setProyectos(value) : null
    }
    return (
        <Container DM={DarkMode} id='Projects'>
            <MiniTitles>
                <Dots />
                <Second DM={DarkMode}>{Language === 'En' ? 'Projects' : 'Proyectos'}</Second>
            </MiniTitles>
            <SelectC DM={DarkMode}>
                <Select DM={DarkMode} onChange={selectHandleChange} name="Project" id="Project">
                    <option value="All">All</option>
                    <option value="Full-Stack">Full-Stack</option>
                    <option value="Front-end">Front</option>
                    <option value="Back-end">Back</option>
                    <option value="Games">Games</option>
                </Select>
                <Inputs>
                    <TypeProject onClick={() => clickHandleChange('All')}>
                        <FaDotCircle size={15} color={proyectos === 'All' ? Celeste : Gris} />
                        <Parag1 DM={DarkMode}>All</Parag1>
                    </TypeProject>
                    <TypeProject onClick={() => clickHandleChange('Full-Stack')} >
                        <FaDotCircle size={15} color={proyectos === 'Full-Stack' ? Celeste : Gris} />
                        <Parag1 DM={DarkMode}>Full-Stack</Parag1>
                    </TypeProject>
                    <TypeProject onClick={() => clickHandleChange('Front-end')} >
                        <FaDotCircle size={15} color={proyectos === 'Front-end' ? Celeste : Gris} />
                        <Parag1 DM={DarkMode}>Front</Parag1>
                    </TypeProject>
                    <TypeProject onClick={() => clickHandleChange('Back-end')} >
                        <FaDotCircle size={15} color={proyectos === 'Back-end' ? Celeste : Gris} />
                        <Parag1 DM={DarkMode}>Back</Parag1>
                    </TypeProject>
                    <TypeProject onClick={() => clickHandleChange('Games')} >
                        <FaDotCircle size={15} color={proyectos === 'Games' ? Celeste : Gris} />
                        <Parag1 DM={DarkMode}>Games</Parag1>
                    </TypeProject>
                </Inputs>
                <TypeProC>
                    <TypeProject>
                        <GoPrimitiveDot size={23} color={Verde} />
                        <Parag DM={DarkMode}>{Language === 'En' ? 'Individual' : 'Individual'}</Parag>
                    </TypeProject>
                    <TypeProject>
                        <GoPrimitiveDot size={23} color={Purpura} />
                        <Parag DM={DarkMode}>{Language === 'En' ? 'Team' : 'Equipo'}</Parag>
                    </TypeProject>
                </TypeProC>
            </SelectC>
            <ContPerProj>
                {proyectos === 'All' ? ProjArr.map(project => {
                    const { id, how, nameEn, nameEs, technologies, img } = project;
                    return <Project
                        key={id}
                        img={img}
                        title={Language === 'En' ? nameEn : nameEs}
                        how={how}
                        techs={Language === 'En' ? `Technologies: ${technologies}` : `Tecnologias: ${technologies}`}
                    ></Project>
                })
                    : ProjArr.map(project => {
                        const { id, how, nameEn, nameEs, technologies, type, img } = project
                        if (type === proyectos) return <Project
                            key={id}
                            img={img}
                            title={Language === 'En' ? nameEn : nameEs}
                            how={how}
                            techs={Language === 'En' ? `Technologies: ${technologies}` : `Tecnologias: ${technologies}`}
                        ></Project>
                    })
                }
            </ContPerProj>
        </Container>
    )
}
