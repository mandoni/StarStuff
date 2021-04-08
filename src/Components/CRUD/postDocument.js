import React, { useEffect, Fragment, useState } from 'react'
import { connect, useDispatch } from "react-redux";
import * as actions from "../../Actions/postDocumnet";
import { Button, Card, Divider, Grid, List, ListItem, ListItemText } from '@material-ui/core';
import { CardHeader, Avatar, IconButton, } from "@material-ui/core";
import { AppBar, Container, Typography, Paper, withStyles, CardContent, CardActions } from "@material-ui/core";
import PostDocumentForm from './postDocumentForm';
import ButterToast, { POS_RIGHT, POS_TOP, Cinnamon } from "butter-toast";
import { DeleteSweep } from "@material-ui/icons";
import './postDocumentForm.css'
import { blueGrey } from '@material-ui/core/colors';
import { useHistory, Link } from 'react-router-dom';



const styles = theme => ({
    paper: {
        //margin: theme.spacing(3),
        padding: theme.spacing(2)
    },
    smMargin: {
        //margin: theme.spacing(1)
    },
    actionDiv: {
        textAlign: "center"
    },
    avatar: {
        backgroundColor: blueGrey[500],

    },
    root: {
        maxWidth: 500,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    }
})


const postDocument = ({ classes, ...props }) => {
    const history = useHistory();
    //const classes = useStyles();

    const dispatch = useDispatch();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [currentId, setCurrentId] = useState(0)

    useEffect(() => {
        props.fetchAllPostDocument()
    }, [])

    const onDelete = id => {
        const onSuccess = () => {
            ButterToast.raise({
                content: <Cinnamon.Crisp title="Noticia"
                    content={() => <div>La noticia ha sido eliminada</div>}
                    scheme={Cinnamon.Crisp.SCHEME_BLUE}
                    icon={<DeleteSweep />}
                />
            })
        }

        if (window.confirm('¿Esta seguro de eliminar esta noticia?')) {
            props.deletePostDocument(id, onSuccess)
        }
    }

    const seccionSeleccionada = (sec) => {
        switch (sec) {
            case "1":
                return "ESP"
            case "2":
                return "TEC"
            case "3":
                return "BIO"
            case "4":
                return "FIL"
            case "5":
                return "SOC"
            case "6":
                return "PHS"

            default:
                break;
        }
    }

    return (
        <div>
            {(user && user.result) ?
                (
                    <Container maxWidth="lg">
                        <AppBar position="static" color="inherit">
                            <Typography
                                variant="h4"
                                align="center">
                                CRUD de Noticias
                </Typography>
                        </AppBar>
                        <Grid container>
                            <Grid item xs={5}>
                                <Paper className="classes.paper">
                                    <PostDocumentForm {...{ currentId, setCurrentId }} />
                                </Paper>
                            </Grid>
                            <Grid item xs={7}>
                                <Paper className={classes.paper}>
                                    <List>
                                        {
                                            props.postDocumnetList.map((record, index) => {
                                                return (
                                                    <Fragment key={index}>
                                                        <ListItem>
                                                            <ListItemText>
                                                                <Card className={classes.root} className="NoticiasRead">
                                                                    <CardHeader
                                                                        avatar={
                                                                            <Avatar aria-label="recipe" className={classes.avatar}>
                                                                                {seccionSeleccionada(record.seccion)}
                                                                            </Avatar>
                                                                        }
                                                                        title={record.title}
                                                                        subheader={record.fecha}
                                                                    />

                                                                    <img src={record.urlImg} className="imagen overflow"
                                                                        onerror="if (this.src == '') ? this.src = '../../Media/no-image.png';" />

                                                                    <CardContent >
                                                                        <Typography variant="body2" color="textSecondary" component="p">
                                                                            {record.encabezado}
                                                                        </Typography>

                                                                        <CardActions disableSpacing>
                                                                            <div className={classes.actionDiv}>
                                                                                <Button variant="contained" color="primary" size="small"
                                                                                    id="myBtn"
                                                                                    className={classes.smMargin}
                                                                                    onClick={() => setCurrentId(record._id)}
                                                                                    onclick="topFunction()"
                                                                                    alt=""
                                                                                    href="#">
                                                                                    Editar
                                                            </Button>
                                                                                <Button variant="contained" color="secondary" size="small"
                                                                                    className={classes.smMargin}
                                                                                    onClick={() => onDelete(record._id)}>
                                                                                    Borrar
                                                            </Button>
                                                                            </div>
                                                                        </CardActions>
                                                                    </CardContent>
                                                                </Card>
                                                            </ListItemText>
                                                        </ListItem>
                                                        <br />
                                                    </Fragment>
                                                )
                                            })
                                        }
                                    </List>
                                </Paper>
                            </Grid>
                        </Grid>
                        <ButterToast position={{ vertical: POS_TOP, horizontal: POS_RIGHT }} />
                        <a class="gotopbtn" href="#"> <i class="fas fa-arrow-up"></i> </a>
                    </Container>
                ) : (
                    <div className="front-sin-cuenta">
                        <Grid className="crear-cuenta">
                            <Typography
                                variant="h4"
                                align="center"
                            >
                                CREA UNA CUENTA
                    </Typography>
                            <Link to="/login">
                                <button className="btn">Crear cuenta</button>
                            </Link>
                        </Grid>
                    </div>
                )
            }
        </div>
    );
}

const mapStateToProps = state => ({
    postDocumnetList: state.postDocument.list
})

const mapActionToProps = {
    fetchAllPostDocument: actions.fetchAll,
    deletePostDocument: actions.Delete
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(postDocument));
