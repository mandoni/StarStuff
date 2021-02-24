import React from 'react'
import './Home.css'

const About = () => {
    return (
        <a name ="nosotros">
            <div className="about-component">
                <h1 className="titulo">
                    Acerca de StarStuff 
                </h1>
                <h2 className="subtitulo">
                Las noticias más destacadas del mundo de la ciencia
                </h2>
                <p className="parrafo">
                    El portal StarStuff publica noticias científicas 
                    fiables y rigurosas con el fin de informar y entretener 
                    a cientos de miles de lectores cada mes. 
                    Nuestros experimentados redactores informan con 
                    su estilo sobre temas científicos de la actualidad, 
                    así como sobre nuevos descubrimientos, misterios 
                    y respuestas a las más diversas preguntas.
                </p>

                <p className="parrafo">
                    El objetivo de StarStuff, es proveer al público un 
                    portal en español que contribuya a despertar la 
                    curiosidad que existe en todos nosotros. Invitamos 
                    a los lectores a que nos visiten a diario, exploren 
                    sus temas de mayor interés y en el camino se informen 
                    y aprendan.
                </p>
            </div>
        </a>
    )
}

export default About
