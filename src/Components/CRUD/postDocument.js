import React, {useEffect, Fragment, useState} from 'react'
import { connect } from "react-redux";
import * as actions from "../../Actions/postDocumnet";
import { Button, Divider, Grid, List, ListItem, ListItemText } from '@material-ui/core';
import { AppBar, Container, Typography, Paper, withStyles } from "@material-ui/core";
import PostDocumentForm from './postDocumentForm';
import ButterToast, { POS_RIGHT, POS_TOP, Cinnamon } from "butter-toast";
import { DeleteSweep } from "@material-ui/icons";



const styles = theme => ({
    paper: {
        margin: theme.spacing(3),
        padding: theme.spacing(2)
    },
    smMargin: {
        margin: theme.spacing(1)
    },
    actionDiv: {
        textAlign: "center"
    }
})

const postDocument = ({ classes, ...props }) => {
    /*const [x, setX] = useState(0)
    setX(5)
    */

   const [currentId, setCurrentId] = useState(0)

    useEffect(() =>{
        props.fetchAllPostDocument()
    }, [])
    
    const onDelete = id =>{
        const onSuccess = () => {
            ButterToast.raise({
                content: <Cinnamon.Crisp title="Noticia"
                    content="La noticia ha sido eliminada"
                    scheme={Cinnamon.Crisp.SCHEME_BLUE}
                    icon={<DeleteSweep />}
                />
            })
        }

        if(window.confirm('¿Esta seguro de eliminar esta noticia?')){
            props.deletePostDocument(id, onSuccess)
        }
    }

    return (
        <Container maxWidth="lg">
              <AppBar position="static" color="inherit">
                <Typography
                  variant="h4"
                  align="center">
                    CRUD de Noticias
                </Typography>
            </AppBar>
            <Grid container>
                <Grid item xs = {5}>
                    <Paper className="classes.paper">
                         <PostDocumentForm {...{currentId, setCurrentId}} />
                    </Paper>
                </Grid>
                <Grid item xs={7}>
                    <Paper className={classes.paper}>
                        <List>
                            {
                                props.postDocumnetList.map((record, index) => {
                                    return(
                                        <Fragment key={index}>
                                            <ListItem>
                                                <ListItemText>
                                                    <Typography variant="h6">
                                                        {record.title}
                                                    </Typography>
                                                    <div>
                                                          {record.encabezado}
                                                    </div>
                                                    <div className={classes.actionDiv}>
                                                    <Button variant="contained" color="primary" size="small"
                                                        className={classes.smMargin}
                                                        onClick={() => setCurrentId(record._id)}>
                                                        Editar
                                                    </Button>
                                                    <Button variant="contained" color="secondary" size="small"
                                                        className={classes.smMargin}
                                                        onClick={() => onDelete(record._id)}>
                                                        Borrar
                                                    </Button>
                                                </div>
                                                </ListItemText>
                                            </ListItem>
                                            <Divider component="li"/>
                                        </Fragment>
                                    )
                                })
                            }
                        </List>
                    </Paper>
                </Grid>
            </Grid>
            <ButterToast position={{vertical:POS_TOP, horizontal:POS_RIGHT}}/>
        </Container>
       
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
