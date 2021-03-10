import React, { Fragment } from 'react'
import { AppBar, Button, Card, CardActions, CardContent, CardHeader, Grid, List, ListItem, ListItemText, Paper, Typography } from '@material-ui/core';
import './News.css'
import FilterMenu from './FilterMenu';

function News(props) {
    var countNoticias = [0, 0, 0, 0, 0, 0]

    console.log(props.secion)
    const [noticias, setNoticias] = React.useState([])

    React.useEffect(() =>{
        console.log("respuesta api")
        obtenerDocumentos()
    }, [])

    const obtenerDocumentos = async() => {
        const data = await fetch('http://localhost:4000/postDocument')
        const documentos =await data.json()
        //console.log(documentos)
        setNoticias(documentos)
    }

    function count() {
        //Filtrar y contar los valores de cada seccion 
        //https://stackoverflow.com/questions/23720988/how-to-filter-json-data-in-javascript-or-jquery
    }

    


    const titulo = () => {
        //Filtrar siempre que se reciba un parametro
        switch (props.secion) {
            case "1":
                return "Noticias: Espacio"

            case "2":
                return "Noticias: Tecnología"
            
            case "3":
                return "Noticias: Biología"

            case "4":
                return "Noticias: Filosofía"

            case "5":
                return "Noticias: Sociedad"

            case "6":
                return "Noticias: Física"


            default:
                return "Todas las noticias";
        }
    }

    return (
        <div className="todo">
            <AppBar position="static" color="inherit">
                <Typography
                  variant="h4"
                  align="center">
                    {titulo()}
                </Typography>
            </AppBar>
            <Grid container>
        <Grid item xs={8} className="tarjetas">
            <Paper className="paper">
                <List>
                {
                    noticias.map(item => (
                        <Fragment key={item._id} className="carta">
                            <ListItem>
                                <ListItemText>
                                    <Card className="tarjeta">
                                        <CardHeader
                                            title={item.title}
                                            subheader = {item.fecha}
                                        />
                                         <img src={item.urlImg} className="imagen"/>
                                    
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
            <FilterMenu/>   
        </Grid>   
        </Grid> 
        <a class="gotopbtn" href="#"> <i class="fas fa-arrow-up"></i> </a>
        </div>
    )
}
export default News