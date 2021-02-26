const mongoose = require('mongoose')
                                                                                //para validar y eliminar algiunas advertencias 
mongoose.connect('mongodb://localhost:27017/postDocument',{useNewUrlParser:true,useUnifiedTopology:true},
err => {
    if (!err)
        console.log('Mongodb conectado!')
    else                                            //convertir Json a string stringify
        console.log('Error al conectar MongoDB : ' + JSON.stringify(err, undefined, 2))
})