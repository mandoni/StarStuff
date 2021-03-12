import React, { Fragment, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { AppBar, Button, Card, CardActions, CardContent, CardHeader, Grid, List, ListItem, ListItemText, Paper, Typography } from '@material-ui/core';
import './News.css'
import FilterMenu from './FilterMenu';

function News(props) {
    const [nCount, setNCount] = useState([0,0,0,0,0,0,0])    
    const [noticias, setNoticias] = useState([])
    const [noticiasFiltradas, setNoticiasFiltradas] = useState([])
    const [tituloN, setTitulo] = useState("Todas las noticias")

    useEffect(() =>{
        //console.log("respuesta api")
        obtenerDocumentos()
        count()
    }, [])

    const obtenerDocumentos = async() => {
        const data = await fetch('http://localhost:4000/postDocument')
        const documentos =await data.json()
        //console.log(documentos)
        setNoticias(documentos)
        setNoticiasFiltradas(documentos)
    }

    const count = async() => {
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
        setNoticiasFiltradas(noticias)

        setNCount(countNoticias)
    }
    
    const cambiarListado = (tema) => {
        count()
        if(tema == '0'){
            setNoticiasFiltradas(noticias)
            return;
        }
        const noticiasFiltradas = noticias.filter(noticia => noticia.seccion === tema)
        //console.log(noticiasFiltradas)
        setNoticiasFiltradas(noticiasFiltradas)
    }

    return (
        <div className="todo">
            <AppBar position="static" color="inherit">
                <Typography
                  variant="h4"
                  align="center">
                    {tituloN}
                </Typography>
            </AppBar>
            <Grid container>
        <Grid item xs={8} className="tarjetas">
            <Paper className="paper">
                <List>
                {
                    noticiasFiltradas.map(item => (
                        <Fragment key={item._id} className="carta">
                            <ListItem>
                                <ListItemText>
                                    <Card className="tarjeta">
                                        <li key={item._id}>
                                            
                                            <CardHeader
                                                title={item.title}
                                                subheader = {item.fecha}
                                            />
                                            
                                            <Link to={`/news/${item._id}`} className="titulo-not">
                                                <img src={item.urlImg} className="imagen-sec"/>
                                            </Link>
                                        </li>

                                        <CardContent>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {item.encabezado}
                                            </Typography>

                                            <CardActions disableSpacing>
                                            <div className="btn-div">
                                                <li key={item._id}>
                                                <Link to={`/news/${item._id}`} className="titulo-not">
                                                <Button variant="contained" color="primary" size="small"
                                                    id="myBtn"
                                                    className="btn-leer"
                                                    onClick= {console.log("x")}>
                                                    Leer
                                                </Button>
                                                </Link>
                                                </li>
                                            </div>
                                            </CardActions>
                                        </CardContent>
                                    </Card>
                                </ListItemText>
                            </ListItem>
                        </Fragment>
                    ))
                }
                </List>
            </Paper>
        </Grid>
        <Grid item xs={4}>
        <div className="filtros">
            <Fragment className="carta">
                <ListItem>
                <ListItemText>
                    <Card className="tarjeta-nav" onClick={() => {
                        setTitulo('Todas las Noticias')
                        cambiarListado('0')
                        //count()
                    }}>
                        Todas las noticias ({nCount[0]})
                    </Card>
                    <Card className="tarjeta-nav" onClick={() => {
                        setTitulo("Noticias espaciales")
                        cambiarListado('1')
                        //count()
                    }}>
                        Espacio ({nCount[1]})
                    </Card>
                    <Card className="tarjeta-nav" onClick={() => {
                        setTitulo("Noticias de Tecnología")
                        cambiarListado('2')
                        //count()
                    }}>
                         Tecnología({nCount[2]})
                    </Card>
                    <Card className="tarjeta-nav" onClick={() => {
                        setTitulo("Noticias de Biología")
                        cambiarListado('3')
                        //count()
                    }}>
                        Biología({nCount[3]})
                    </Card>
                    <Card className="tarjeta-nav" onClick={() => {
                        setTitulo("Noticias de filosofía")
                        cambiarListado('4')
                        //count()
                    }}>
                        Filosofía ({nCount[4]})
                    </Card>
                    <Card className="tarjeta-nav" onClick={() => {
                        setTitulo("Noticias de sociedad")
                        cambiarListado('5')
                        //count()
                    }}>
                        Sociedad ({nCount[5]})
                    </Card>
                    <Card className="tarjeta-nav" onClick={() => {
                        setTitulo("Noticias de Física")
                        cambiarListado('6')
                        //count()
                    }}>
                        Física ({nCount[6]})
                    </Card>
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
export default News;