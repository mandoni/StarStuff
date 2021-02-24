import React from 'react'
import CardItem from "./CardItem";
import './Cards.css'

import Espacio from '../../Media/space.svg'
import Tecnology from '../../Media/tecnology.svg'
import Biologie from '../../Media/biologie.svg'
import Philosophy from '../../Media/philosophy.svg'
import Society from '../../Media/society.svg'
import Physics from '../../Media/physics.svg'

function Cards() {
    return (
        <div className="cards">
            <h1>Secciones principales</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem className="card-back"
                            src= {Espacio}
                            text="Espacio"
                            path="/secciones"
                        />
                        <CardItem className="card-back"
                            src= {Tecnology}
                            text="Tecnologia"
                            path="/secciones"
                        />
                        <CardItem className="card-back"
                            src= {Biologie}
                            text="Biología"
                            path="/secciones"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem className="card-back"
                            src= {Philosophy}
                            text="Filosofía"
                            path="/secciones"
                        />
                        <CardItem className="card-back"
                            src= {Society}
                            text="Sociedad"
                            path="/secciones"
                        />
                        <CardItem className="card-back"
                            src= {Physics}
                            text="Física"
                            path="/secciones"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Cards
