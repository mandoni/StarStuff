require('./db')
import { mongoose } from "mongoose";

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

var postDocumentRoutes = require('./controllers/postDocumentController')


var app = express()     //configurar el body-parser
app.use(bodyParser.json())
app.use(cors({origin:'http://localhost:3000'}))
app.listen(4000,()=>console.log('Server iniciado en : 4000'))

app.get('/', (req, res) => {
    res.send(
        "I hear you"
    ) 
});

app.get('/api/documents', (req, res) => {
     res.send("documents")
});

app.use('/postDocument', postDocumentRoutes) 

///----user 
import  userRoutes from "./routes/users";

app.use('/user', userRoutes)