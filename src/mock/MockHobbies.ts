import { HobbiesI } from "../interfaces/interfaces";
/* Images */
import LoL from '../assets/images/Ekko.jpg';
import Gym from '../assets/images/Gym.jpg';
import Cook from '../assets/images/Food.jpg';
import Code from '../assets/images/Code.jpg';
import Drawing from '../assets/images/Drawings.jpg'

export const HobArr: HobbiesI[] = [
    {
        id: '1',
        img: LoL,
        descrEn: 'Video Games',
        descrEs: 'Videojuegos'
    },
    {
        id: '2',
        img: Gym,
        descrEn: 'Gym',
        descrEs: 'Gimnasio'
    },
    {
        id: '3',
        img: Cook,
        descrEn: 'Cook',
        descrEs: 'Cocinar'
    },
    {
        id: '4',
        img: Code,
        descrEn: 'Code',
        descrEs: 'Programar'
    },
    {
        id: '5',
        img: Drawing,
        descrEn: 'Draw',
        descrEs: 'Dibujar'
    }
]