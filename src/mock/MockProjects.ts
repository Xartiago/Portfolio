import { ProjectsI } from "../interfaces/interfaces";
/* Imgs */
import Dogs from '../assets/images/Dogs.png'
import Portfolio from '../assets/images/Portfolio.png'
import PG from '../assets/images/PG.png'

export const ProjArr: ProjectsI[] = [
    {
        id: '1',
        img: Dogs,
        nameEn: 'Dogs PI-Henry',
        nameEs: 'Dogs PI-Henry',
        how: "Individual",
        technologies: 'Html, Css, React, Redux, Node, Express, Sequelize, Postgress',
        type: "Full-Stack"
    },
    {
        id: '2',
        img: PG,
        nameEn: 'Multiserv PF-Henry',
        nameEs: 'Multiservicios PF-Henry',
        how: "Grupal",
        technologies: 'Html, Css, React, Redux, Tailwind, node,Sexpress, Sequelize, Postgress, Firebase',
        type: "Full-Stack"
    },
    {
        id: '3',
        img: Portfolio,
        nameEn: 'Dev Portfolio',
        nameEs: 'Portafolio',
        how: "Individual",
        technologies: 'Html, Css, React, Redux, Node, Express, Sequelize, Postgress',
        type: "Front-end"
    },
]