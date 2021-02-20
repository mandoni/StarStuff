import React from 'react'
import { useParams } from 'react-router-dom'

const Noticia = () => {

    const {title} = useParams()
    console.log(title)

    const [noticia, setNoticia] = React.useState([])

    React.useEffect(() => {
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const data = await fetch(`newsapi.org/v2/top-headlines?country=mx&apiKey=6204627390254ac2931b073251803604/${title}`)
        const scsNew = await data.json()
        setNoticia(scsNew)
    }

    return (
        <div>
            <h3>{noticia.title}</h3> 
        </div>
    )
}

export default Noticia
