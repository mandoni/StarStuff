require('./db')

const express = require('express')
const bodyParser = require('body-parser')

var postDocumentRoutes = require('./controllers/postDocumentController')


var app = express()     //configurar el body-parser
app.use(bodyParser.json())
app.listen(4000,()=>console.log('Server iniciado en : 4000'))

app.use('/postDocument', postDocumentRoutes)