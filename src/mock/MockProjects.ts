import { ProjectsI } from "../interfaces/interfaces";
/* Imgs */
import Dogs from '../assets/images/Dogs.png'
import Portfolio from '../assets/images/Portfolio.png'
import PG from '../assets/images/PG.png'
import Trueqin from '../assets/images/Trueqin.png'

export const ProjArr: ProjectsI[] = [
    {
        id: '1',
        img: Dogs,
        nameEn: 'Dogs PI-Henry',
        nameEs: 'Dogs PI-Henry',
        how: "Individual",
        technologies: 'Html, Css, React, JS, Redux, Node, Express, Sequelize, Postgress',
        type: "Full-Stack"
    },
    {
        id: '2',
        img: PG,
        nameEn: 'Multiserv PF-Henry',
        nameEs: 'Multiservicios PF-Henry',
        how: "Grupal",
        technologies: 'Html, Css, React, JS, Redux, Tailwind, node,Sexpress, Sequelize, Postgress, Firebase',
        type: "Full-Stack"
    },
    {
        id: '3',
        img: Portfolio,
        nameEn: 'Dev Portfolio',
        nameEs: 'Portafolio',
        how: "Individual",
        technologies: 'Html, Styled Components, React, TS, Redux, Node, Express, Sequelize, Postgress',
        type: "Front-end"
    },
    {
        id: '4',
        img: Trueqin,
        nameEn: 'Trueq-in Android App',
        nameEs: 'Trueq-in Android App',
        how: "Individual",
        technologies: 'Kotlin, Android Studio, Firebase, Css',
        type: "Front-end"
    }
]