import { ProjectsI } from "../interfaces/interfaces";
/* Imgs */
import Dogs from '../assets/images/Dogs.png'
import Dogs1 from '../assets/images/Dogs1.png'
import Portfolio from '../assets/images/Portfolio.png'

export const ProjArr: ProjectsI[] = [
    {
        id: '1',
        img: Dogs,
        img2: Dogs1,
        nameEn: 'Dogs PI-Henry',
        nameEs: 'Dogs PI-Henry',
        in: "Individual",
        technologies: 'Html, Css, React, Redux, Node, Express, Sequelize, Postgress',
        type: "Full-Stack"
    },
    {
        id: '2',
        // img: ,
        nameEn: 'Multiserv Dogs PF-Henry',
        nameEs: 'Multiserv PF-Henry',
        in: "Grupal",
        technologies: 'Html, Css, React, Redux, Tailwind, node,Sexpress, Sequelize, Postgress, Firebase',
        type: "Full-Stack"
    },
    {
        id: '3',
        img: Portfolio,
        nameEn: 'DevPortfolio',
        nameEs: 'Portafolio',
        in: "Individual",
        technologies: 'Html, Css, React, Redux, Node, Express, Sequelize, Postgress',
        type: "Front-end"
    },
]