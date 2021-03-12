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
        <a name="secciones" href="">
            <div className="cards">
                <h1>Secciones principales</h1>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                            <CardItem className="card-back"
                                src= {Espacio}
                                text="Espacio"
                                secion = "1"
                                path="/secciones"
                            />
                            <CardItem className="card-back"
                                src= {Tecnology}
                                secion = "2"
                                text="Tecnologia"
                                path="/secciones"
                            />
                            <CardItem className="card-back"
                                src= {Biologie}
                                text="Biología"
                                secion = "3"
                                path="/secciones"
                            />
                        </ul>
                        <ul className="cards__items">
                            <CardItem className="card-back"
                                src= {Philosophy}
                                text="Filosofía"
                                secion = "4"
                                path="/secciones"
                            />
                            <CardItem className="card-back"
                                src= {Society}
                                text="Sociedad"
                                secion = "5"
                                path="/secciones"
                            />
                            <CardItem className="card-back"
                                src= {Physics}
                                text="Física"
                                secion = "6"
                                path="/secciones"
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </a>
    );
}
export default Cards
