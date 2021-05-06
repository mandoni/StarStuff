require('./db')

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');
//const redis = require('redis');
 
var postDocumentRoutes = require('./controllers/postDocumentController');
//const REDIS_PORT = process.env.PORT || 6379;

//const client = redis.createClient(REDIS_PORT);

var app = express()     //configurar el body-parser
app.use(bodyParser.json())
app.use(cors())
app.listen(4000,()=>console.log('Server iniciado en : 4000'))

/*/Cache middleware
function cache(req, res, next){
    const {username} = req.params;
    client.get(username, (err, data) => {
        if(err) throw err;

        if(data!==null){
            res.send(setResponse(username, data))
        }else{
            next();
        }
    })
}*/

app.get('/', (req, res) => {
    res.send(
        "I hear you"
    ) 
});

app.get('/api/documents',  (req, res) => {
     res.send("documents")
});

app.use('/postDocument', postDocumentRoutes) 

