import { TextField, InputLabel, Select, MenuItem, withStyles, Button} from '@material-ui/core'
import React, {useEffect, useState} from 'react'
import useForm from "./useForm";

const initilFileValues = {
    title: '',
    autor: '',
    fecha: '',
    encabezado: '',
    seccion: 1,
    doumento: '',
    urlImg: '',
    fuente: '',
    urlFuente: ''
}

const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1)
        },
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    postBtn: {
        width: "50%",
        justifyContent: 'center'
    }
})

const postDocumentForm = ({classes, ...props}) => {

    var {
        values,
        serValues,
        handleInputChange 
    } = useForm(initilFileValues);

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} 
        onSubmit={handleSubmit}>
            <TextField name="title" variant="outlined" label="Título" fullWidth value={values.title} onChange={handleInputChange} />
            <TextField name="autor" variant="outlined" label="Autor" fullWidth value={values.autor} onChange={handleInputChange}/>
            <TextField name="fecha" type="date" label="Fecha" defaultValue='31-01-2021' fullWidth value={values.fecha} onChange={handleInputChange}
                InputLabelProps={{
                shrink: true}}/>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                Sección
            </InputLabel>
            <Select
            name="seccion"
            labelId="demo-simple-select-placeholder-label-label"
            id="demo-simple-select-placeholder-label"
            onChange={handleInputChange}
            fullWidth defaultvalue={values.seccion} defaultValue={1}>
                <MenuItem value={1}>Espacio</MenuItem>
                <MenuItem value={2}>Tecnología</MenuItem>
                <MenuItem value={3}>Biología</MenuItem>
                <MenuItem value={4}>Filosofía</MenuItem>
                <MenuItem value={5}>Sociedad</MenuItem>
                <MenuItem value={6}>Física</MenuItem>
            </Select>
            <TextField name="documento" label="Documento" multiline rows={4} variant="outlined"fullWidth value={values.doumento} onChange={handleInputChange}/>
            <TextField name="urlImg" variant="outlined" label="URLImagen" fullWidth value={values.urlImg} onChange={handleInputChange}/>
            <TextField name="fuente" variant="outlined" label="Fuente" fullWidth value={values.fuente} onChange={handleInputChange}/>
            <TextField name="urlFuente" variant="outlined" label="URLFuente" fullWidth value={values.urlFuente} onChange={handleInputChange}/>
            <Button
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                className={classes.postBtn}
            >Enviar</Button>
        </form>
    )
}

export default withStyles()(postDocumentForm)