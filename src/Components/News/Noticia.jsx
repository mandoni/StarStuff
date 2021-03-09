import React from 'react'
import { useParams } from 'react-router-dom'

const Noticia = () => {

    const {_id} = useParams()
    console.log(_id)

    const [noticia, setNoticia] = React.useState([])

    React.useEffect(() => {
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const data = await fetch(`http://localhost:4000/postDocument/getDocument/${_id}`)
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
