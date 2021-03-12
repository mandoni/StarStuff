import { Card, Grid, ListItem, ListItemText, Paper, Typography } from '@material-ui/core'
import React, { Fragment, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import './News.css'

const Noticia = () => {
    const { id } = useParams()
    const [nCount, setNCount] = useState([0, 0, 0, 0, 0, 0, 0])
    const [noticia, setNoticia] = useState([])
    var noticias =  []

    useEffect(() => {
        obtenerDocumento()
        obtenerDocumentos()
    }, [])

    const obtenerDocumento = async () => {
        const dataN = await fetch(`http://localhost:4000/postDocument/getDocument/${id}`)
        const documentoN = await dataN.json()
        //console.log(documentos)
        setNoticia(documentoN)
    }

    const obtenerDocumentos = async () => {
        const data = await fetch('http://localhost:4000/postDocument')
        noticias = await data.json()
    }


    const count = async () => {
        const countNoticias = [0, 0, 0, 0, 0, 0, 0]

        //Todas las noticias 
        countNoticias[0] = Object.keys(noticias).length

        //Espacio
        var noticiasFiltradas1 = noticias.filter(noticia => noticia.seccion === '1')
        countNoticias[1] = Object.keys(noticiasFiltradas1).length
        //setNoticiasFiltradas(noticias)

        //Tecnologia
        noticiasFiltradas1 = noticias.filter(noticia => noticia.seccion === '2')
        countNoticias[2] = Object.keys(noticiasFiltradas1).length
        //setNoticiasFiltradas(noticias)

        //Biologia
        noticiasFiltradas1 = noticias.filter(noticia => noticia.seccion === '3')
        countNoticias[3] = Object.keys(noticiasFiltradas1).length
        //setNoticiasFiltradas(noticias)

        //Filosofia
        noticiasFiltradas1 = noticias.filter(noticia => noticia.seccion === '4')
        countNoticias[4] = Object.keys(noticiasFiltradas1).length
        //setNoticiasFiltradas(noticias)

        //sociedad
        noticiasFiltradas1 = noticias.filter(noticia => noticia.seccion === '5')
        countNoticias[5] = Object.keys(noticiasFiltradas1).length
        //setNoticiasFiltradas(noticias)

        //Fisica
        noticiasFiltradas1 = noticias.filter(noticia => noticia.seccion === '6')
        countNoticias[6] = Object.keys(noticiasFiltradas1).length

        setNCount(countNoticias)
    }

    return (
        <div className="noticia-sola">
            <Grid container>
                <Grid item xs={8} className="tarjetas">
                    <Paper className="paper">
                        <Typography variant="body2" color="textSecondary" component="p">
                            {noticia.title}
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={4}>
                    <div className="filtros">
                        <Fragment className="carta">
                            <ListItem>
                                <ListItemText>
                                    <Link to="/secciones">
                                        <Card className="tarjeta-nav" onClick={() => {
                                            count()
                                        }}> Todas las noticias ({nCount[0]})
                                        </Card>
                                    </Link>
                                    <Link to="/secciones">
                                        <Card className="tarjeta-nav" onClick={() => {
                                            count()
                                        }}>
                                            Espacio ({nCount[1]})
                                        </Card>
                                    </Link>
                                    <Link to="/secciones">
                                        <Card className="tarjeta-nav" onClick={() => {
                                            count()
                                        }}>
                                            Tecnología({nCount[2]})
                                        </Card>
                                    </Link>
                                    <Link to="/secciones">
                                        <Card className="tarjeta-nav" onClick={() => {
                                            count()
                                        }}>
                                            Biología({nCount[3]})
                                        </Card>
                                    </Link>
                                    <Link to="/secciones">
                                        <Card className="tarjeta-nav" onClick={() => {
                                            count()
                                        }}>
                                            Filosofía ({nCount[4]})
                                        </Card>
                                    </Link>
                                    <Link to="/secciones">
                                        <Card className="tarjeta-nav" onClick={() => {
                                            count()
                                        }}>
                                            Sociedad ({nCount[5]})
                                        </Card>
                                    </Link>
                                    <Link to="/secciones">
                                        <Card className="tarjeta-nav" onClick={() => {
                                            count()
                                        }}>
                                            Física ({nCount[6]})
                                        </Card>
                                    </Link>
                                </ListItemText>
                            </ListItem>
                        </Fragment>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Noticia
