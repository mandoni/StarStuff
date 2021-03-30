const express = require('express')
var router = express.Router()
var ObjectID = require('mongoose').Types.ObjectId

var { postDocument } = require('../models/postDocument')



router.get('/', (req, res) => { 
    postDocument.find((err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error al leer los registros: ' + JSON.stringify(err, undefined, 2))
    })
})

router.get('/getDocument/:id', (req, res) => { 
        postDocument.findById(req.params.id, (err, docs)=> {
            if (!err) res.send(docs)
            else console.log('Error al eliminer el registro: ' + JSON.stringify(err, undefined, 2))
        }
    )}
)

import { auth } from "../middleware/auth.js";

router.post('/', auth, (req, res) => {
    var newRecord = new postDocument({
        title: req.body.title,
        autor: req.body.autor,
        fecha: req.body.fecha,
        encabezado : req.body.encabezado,
        seccion : req.body.seccion,
        documento : req.body.documento,
        urlImg : req.body.urlImg,
        fuente : req.body.fuente,
        urlFuente : req.body.urlFuente
    })

    newRecord.save((err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error al crear registro: ' + JSON.stringify(err, undefined, 2))
    })
})

router.put('/:id', auth, (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('Registro no encontrado : ' + req.params.id)

    var updatedRecord = {
        title: req.body.title,
        autor: req.body.autor,
        fecha: req.body.fecha,
        encabezado : req.body.encabezado,
        seccion : req.body.seccion,
        documento : req.body.documento,
        urlImg : req.body.urlImg,
        fuente : req.body.fuente,
        urlFuente : req.body.urlFuente
    }

    postDocument.findByIdAndUpdate(req.params.id, { $set: updatedRecord },{new:true}, (err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error al actualizar el registro: ' + JSON.stringify(err, undefined, 2))
    })
})

router.delete('/:id', auth, (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID de registro no encontrado: ' + req.params.id)

        postDocument.findByIdAndRemove(req.params.id, (err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error al eliminer el registro: ' + JSON.stringify(err, undefined, 2))
    })
})


module.exports = router