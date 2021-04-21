const mongoose = require('mongoose')
                                                                                //para validar y eliminar algiunas advertencias 
//mongoose.connect('mongodb+srv://tonytaze:ap53tr56xkHWTe7@starstuffusers.n9k9i.mongodb.net/StarStuff',{useNewUrlParser:true,useUnifiedTopology:true},
mongoose.connect('mongodb://mongo:27017/StarStuff',{useNewUrlParser:true,useUnifiedTopology:true},
err => {
    if (!err)
        console.log('Mongodb conectado!')
    else                                            //convertir Json a string stringify
        console.log('Error al conectar MongoDB : ' + JSON.stringify(err, undefined, 2))
})
