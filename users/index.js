import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import userRouter from './routes/users.js'

const app = express()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

//app.use('/posts', postRoutes);
app.use("/user", userRouter);

//const CONNECTION_URL = 'mongodb+srv://tonytaze:ap53tr56xkHWTe7@starstuffusers.n9k9i.mongodb.net/StarStuff';
const CONNECTION_URL = 'mongodb://mongo:27017/StarStuff';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Iniciando en puerto: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} no se pudo conectar`));

mongoose.set('useFindAndModify', false);

/*module.exports = {
    mongoURI: "",
    secretOrKey: "ap53tr56xkHWTe7"


    mongodb+srv://tonytaze:<password>@starstuffusers.n9k9i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
  };
  
  
  Solicitud de origen cruzado bloqueada: La misma política de origen no permite la lectura de recursos remotos en http://localhost/5000/user/signup. (Razón: Solicitud CORS no exitosa)*/
