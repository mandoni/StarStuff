import React, {useEffect, useState, Fragment} from 'react'
import { connect } from "react-redux";
import * as actions from "../../Actions/postDocumnet";
import { Divider, Grid, List, ListItem, ListItemText } from '@material-ui/core';
import { AppBar, Container, Typography, Paper, withStyles } from "@material-ui/core";
import PostDocumentForm from './postDocumentForm';

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
    useEffect(() =>{
        props.fetchAllPostDocument()
    }, [])
    
    
    return (
        <Container maxWidth="lg">
              <AppBar position="static" color="inherit">
                <Typography
                  variant="h2"
                  align="center">
                    CRUD de Noticias
                </Typography>
            </AppBar>
            <Grid container>
                <Grid item xs = {5}>
                    <Paper className="classes.paper">
                         <PostDocumentForm />
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
