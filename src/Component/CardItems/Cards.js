import React from 'react';
import Carditem from './Carditem';
import { kartuFiv, kartuFor, kartuOne, kartuTre, kartuTwo } from '../../Pages/Product/Data';
import Kartuu from '../kartu/Kartuu';
import './Card.css';


function Cards() {
    return(
    <div className="cards">
        <h1>Foto Makan </h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <Kartuu {...kartuTwo}/>
                    <Kartuu {...kartuOne}/>
                    
                </ul>
                <ul className="cards__items">
                    <Kartuu {...kartuTre}/>
                    <Kartuu {...kartuFor}/>
                    <Kartuu {...kartuFiv}/>
                    
                </ul>
            </div>
        </div>
    </div>

    );
}

export default Cards
