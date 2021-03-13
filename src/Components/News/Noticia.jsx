import { Card, Grid, ListItem, ListItemText, Paper, Typography } from '@material-ui/core'
import React, { Fragment, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import FilterMenu from './FilterMenu'
import './News.css'

const Noticia = () => {
    const { id } = useParams()
    const [nCount, setNCount] = useState([0, 0, 0, 0, 0, 0, 0])
    const [noticia, setNoticia] = useState([])
    var noticias = []

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

    const secc = () => {
        switch (noticia.seccion) {
            case '1':
                return "Espacio"
            case '2':
                return "Tecnología"
            case '3':
                return "Biología"
            case '4':
                return "Filosofía"
            case '5':
                return "Sociedad"
            case '6':
                return "Física"
        }
    }

    /*const parrafos = () => {
        return noticia.documento.split("\n")  
    }*/

    return (
        <div className="noticia-sola">
            <Grid container>
                <Grid item xs={8} className="tarjetas-sola">
                    <div className="container-one-new">
                        <Paper className="paper">
                            <Typography variant="h3" color="textPrimary" className="margen-text">
                                {noticia.title}
                            </Typography>
                            <Typography variant="subtitle1" className="margen-text" color="textSecondary" gutterBottom component="p">
                                Autor de nota {noticia.autor} 
                            </Typography>
                            <Typography variant="overline" className="margen-text" color="textSecondary" gutterBottom component="p">
                                Sección: {secc()}
                            </Typography>
                            <Typography variant="overline" className="margen-text" color="textSecondary" gutterBottom component="p">
                                {noticia.fecha}
                            </Typography>
                            <p className="header-new">
                                {noticia.encabezado}
                            </p><br/>

                            <img src={noticia.urlImg} className="imagen-noticia-completa"/><br/>

                            <p className="nota-completa">
                                {noticia.documento}
                            </p>

                            <p className="fuente">
                                {noticia.fuente} <a href={noticia.urlFuente}>Paper original</a>
                            </p>
                        </Paper>
                    </div>
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
            <FilterMenu/>
        </div>
    )
}

export default Noticia
/*<p className="nota-completa">
                                {
                                    parrafos.map(parr =>(
                                        <p className="s">
                                            {parr[0]}
                                        </p>
                                    ))
                                }
                            </p>*/