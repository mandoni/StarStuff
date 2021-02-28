import React from 'react';
import './News.css'
import { Link } from "react-router-dom";

const News = () => {
    const [noticia, setNoticia] = React.useState([])

    React.useEffect(() => {
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        //const data = await fetch('http://newsapi.org/v2/top-headlines?country=mx&apiKey=6204627390254ac2931b073251803604')
        const data = await fetch("http://localhost:4000/postDocument")
        const scsNew = await data.json()
        setNoticia(scsNew)
    }
    return(
        
        <div className="noticias">
            <br/><br/>
            <ul>
                {
                    noticia.map(item => (
                        <li key={item._id}>
                            <Link to = {`/news/${item.title}`}>{item.title}</Link> <br/>
                            {item.encabezado}
                            <hr/>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default News;