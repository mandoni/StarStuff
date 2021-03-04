import { TextField, InputLabel, Select, MenuItem, withStyles, Button} from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import useForm from "./useForm";
import { connect } from "react-redux";
import * as actions from "../../Actions/postDocumnet";
import ButterToast, { Cinnamon } from "butter-toast";
import { AssignmentTurnedIn } from "@material-ui/icons";

const initilFileValues = {
    title: '',
    autor: '',
    fecha: '',
    encabezado: '',
    seccion: '',
    documento:  '',
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

    useEffect(() => {
        if(props.currentId != 0){
            setValues({
                ...props.postDocumnetList.find(x => x._id == props.currentId)
            })
            setErrors({})
        }
    }, [props.currentId])

    const validate = () => {
        let temp = {...errors}
        temp.tittle = values.title?"":"Este campo es requerido"
        temp.autor = values.autor?"":"Este campo es requerido"
        temp.fecha = values.fecha?"":"Este campo es requerido"
        temp.encabezado = values.encabezado?"":"Este campo es requerido"
        temp.seccion = values.seccion?"":"Este campo es requerido"
        temp.documento = values.documento?"":"Este campo es requerido"
        temp.fuente = values.fuente?"":"Este campo es requerido"
        setErrors({
            ...temp
        })
        return Object.values(temp).every(x => x == "")
    }

    var {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initilFileValues, props.setCurrentId);

    const handleSubmit = e => {
        e.preventDefault()
        const onSuccess = () => {
            ButterToast.raise({
                content: <Cinnamon.Crisp title="Noticia"
                    content="La noticia creada correctamente"
                    scheme={Cinnamon.Crisp.SCHEME_BLUE}
                    icon={<AssignmentTurnedIn />}
                />
            })
            resetForm()
        }
        if (validate()) {
            if (props.currentId == 0)
                props.createPostDocument(values, onSuccess)
            else
                props.updatePostDocument(props.currentId, values, onSuccess)
        }
    }

    return (
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} 
        onSubmit={handleSubmit}>
            <TextField name="title" variant="outlined" label="Título" fullWidth value={values.title} onChange={handleInputChange}  {...(errors.title && { error: true, helperText: errors.title })}/>
            <TextField name="autor" variant="outlined" label="Autor" fullWidth value={values.autor} onChange={handleInputChange}  {...(errors.autor && { error: true, helperText: errors.autor })}/>
            <TextField
                name="encabezado"
                variant="outlined"
                label="Encabezado"
                fullWidth
                multiline
                rows={2}
                value={values.encabezado}
                onChange={handleInputChange}
                {...(errors.encabezado && { error: true, helperText: errors.encabezado })}
            />
            <TextField name="fecha" type="date" label="Fecha" defaultValue='31-01-2021' fullWidth value={values.fecha} onChange={handleInputChange}
                InputLabelProps={{
                shrink: true}}
                {...(errors.fecha && { error: true, helperText: errors.fecha })}/>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                Sección
            </InputLabel>
            <Select
            name="seccion"
            labelId="demo-simple-select-placeholder-label-label"
            id="demo-simple-select-placeholder-label"
            onChange={handleInputChange}
            fullWidth defaultvalue={values.seccion}
            {...(errors.seccion && { error: true, helperText: errors.seccion })}>
                <MenuItem value={1}>Espacio</MenuItem>
                <MenuItem value={2}>Tecnología</MenuItem>
                <MenuItem value={3}>Biología</MenuItem>
                <MenuItem value={4}>Filosofía</MenuItem>
                <MenuItem value={5}>Sociedad</MenuItem>
                <MenuItem value={6}>Física</MenuItem>
            </Select>
            <TextField
                name="documento"
                variant="outlined"
                label="Documento"
                fullWidth
                multiline
                rows={4}
                value={values.documento}
                onChange={handleInputChange}
                {...(errors.documento && { error: true, helperText: errors.documento })}
            />
            <TextField name="urlImg" variant="outlined" label="URLImagen" fullWidth value={values.urlImg} onChange={handleInputChange}/>
            <TextField name="fuente" variant="outlined" label="Fuente" fullWidth value={values.fuente} onChange={handleInputChange}
              {...(errors.fuente && { error: true, helperText: errors.fuente })}/>
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

const mapStateToProps = state => ({
    postDocumnetList: state.postDocument.list
})

const mapActionToProps = {
    createPostDocument: actions.create,
    updatePostDocument: actions.update
}

export default connect(mapStateToProps, mapActionToProps)(withStyles()(postDocumentForm));