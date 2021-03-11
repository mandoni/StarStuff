import React, { Fragment, useEffect, useState } from 'react'
import { AppBar, Button, Card, CardActions, CardContent, CardHeader, Grid, List, ListItem, ListItemText, Paper, Typography } from '@material-ui/core';
import './News.css'
import FilterMenu from './FilterMenu';

function News(props) {
    const countNoticias = [0, 0, 0, 0, 0, 0, 0]

    
    const [noticias, setNoticias] = useState([])
    const [noticiasFiltradas, setNoticiasFiltradas] = useState([])
    const [tituloN, setTitulo] = useState("Todas las noticias")

    useEffect(() =>{
        //console.log("respuesta api")
        obtenerDocumentos()
    }, [])

    const obtenerDocumentos = async() => {
        
        const data = await fetch('http://localhost:4000/postDocument')
        const documentos =await data.json()
        //console.log(documentos)
        setNoticias(documentos)
        setNoticiasFiltradas(documentos)
        
    }

    function count() {
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

        console.log(countNoticias)
    }
    
    const cambiarListado = (tema) => {
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
                                        <CardHeader
                                            title={item.title}
                                            subheader = {item.fecha}
                                        />
                                         <img src={item.urlImg} className="imagen-sec"/>
                                    
                                        <CardContent>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {item.encabezado}
                                            </Typography>

                                            <CardActions disableSpacing>
                                            <div className="btn-div">
                                                <Button variant="contained" color="primary" size="small"
                                                    id="myBtn"
                                                    className="btn-leer"
                                                    //onClick={() => setCurrentId(record._id)}
                                                    onclick="topFunction()"
                                                    href="/#">
                                                    Leer
                                                </Button>
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
                    }}>
                        Todas las noticias ({countNoticias[0]})
                    </Card>
                    <Card className="tarjeta-nav" onClick={() => {
                        setTitulo("Noticias espaciales")
                        cambiarListado('1')
                    }}>
                        Espacio ({countNoticias[1]})
                    </Card>
                    <Card className="tarjeta-nav" onClick={() => {
                        setTitulo("Noticias de Tecnología")
                        cambiarListado('2')
                    }}>
                         Tecnología({countNoticias[2]})
                    </Card>
                    <Card className="tarjeta-nav" onClick={() => {
                        setTitulo("Noticias de Biología")
                        cambiarListado('3')
                    }}>
                        Biología({countNoticias[3]})
                    </Card>
                    <Card className="tarjeta-nav" onClick={() => {
                        setTitulo("Noticias de filosofía")
                        cambiarListado('4')
                    }}>
                        Filosofía ({countNoticias[4]})
                    </Card>
                    <Card className="tarjeta-nav" onClick={() => {
                        setTitulo("Noticias de sociedad")
                        cambiarListado('5')
                    }}>
                        Sociedad ({countNoticias[5]})
                    </Card>
                    <Card className="tarjeta-nav" onClick={() => {
                        setTitulo("Noticias de Física")
                        cambiarListado('6')
                    }}>
                        Física ({countNoticias[6]})
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