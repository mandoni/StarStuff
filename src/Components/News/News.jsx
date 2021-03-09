import React, { Fragment } from 'react'
import './News.css'
import { AppBar, Button, Card, CardActions, CardContent, CardHeader, Grid, List, ListItem, ListItemText, Paper, Typography } from '@material-ui/core';


function News(filter) {

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

    const titulo = () => {
        switch(filter){
            case "0":
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
            <div className="tarjetas">
        <Grid item xs={5}>
            <Paper className="paper">
                <List>
                {
                    noticias.map(item => (
                        <Fragment key={item._id}>
                            <ListItem>
                                <ListItemText>
                                    <Card className="tarjeta">
                                        <CardHeader
                                            title={item.title}
                                            subheader = {item.fecha}
                                        />
                                         <img src={item.urlImg} className="imagen overflow" 
                                                    onerror="if (this.src == '') ? this.src = '../../Media/no-image.png';"/>
                                    
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
        </div>
        </div>
    )
}
export default News