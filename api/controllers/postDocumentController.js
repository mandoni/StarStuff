const express = require('express')
var router = express.Router()

var { PostDocument } = require('../models/postDocument')

//CREAR 
router.get('/', (req, res) => {
    PostDocument.find((err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while retrieving all records : ' + JSON.stringify(err, undefined, 2))
    })
})