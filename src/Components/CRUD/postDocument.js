import React, {useEffect, useState} from 'react'
import { connect } from "react-redux";
import * as actions from "../../Actions/postDocumnet";
import { Divider, Grid } from '@material-ui/core';
import { AppBar, Container, Typography } from "@material-ui/core";

const postDocument = (props) => {
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
                </Grid>
                <Grid item xs = {7}>
                    <div>
                        Lista
                    </div>
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

export default connect(mapStateToProps, mapActionToProps)(postDocument);
