import { TextField, InputLabel, Select, MenuItem, withStyles} from '@material-ui/core'
import React, {useEffect, useState} from 'react'

const initilFileValues = {
    title: '',
    autor: '',
    fecha: '',
    encabezado: '',
    seccion: '',
    doumento: '',
    urlImg: '',
    fuente: '',
    urlFuente: ''
}

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

const postDocumentForm = (props) => {

    const [values, serValues] = useState(initilFileValues)

    return (
        <form autoComplete="off" noValidate>
            <TextField name="title" variant="outlined" label="Título" fullWidth value={values.title} />
            <TextField name="autor" variant="outlined" label="Autor" fullWidth value={values.autor}/>
            <TextField name="fecha" type="date" label="Fecha" defaultValue='31-01-2021' fullWidth value={values.fecha}
                InputLabelProps={{
                shrink: true}}/>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                Sección
            </InputLabel>
            <Select
            name="seccion"
            labelId="demo-simple-select-placeholder-label-label"
            id="demo-simple-select-placeholder-label"
            defaultValue={1} fullWidth value={values.seccion}>
                <MenuItem value={1}>Espacio</MenuItem>
                <MenuItem value={2}>Tecnología</MenuItem>
                <MenuItem value={3}>Biología</MenuItem>
                <MenuItem value={4}>Filosofía</MenuItem>
                <MenuItem value={5}>Sociedad</MenuItem>
                <MenuItem value={6}>Física</MenuItem>
            </Select>
            <TextField name="documento" label="Documento" multiline rows={4} variant="outlined"fullWidth value={values.doumento}/>
            <TextField name="urlImg" variant="outlined" label="URLImagen" fullWidth value={values.urlImg}/>
            <TextField name="fuente" variant="outlined" label="Fuente" fullWidth value={values.fuente}/>
            <TextField name="urlFuente" variant="outlined" label="URLFuente" fullWidth value={values.urlFuente}/>
        </form>
    )
}

export default postDocumentForm