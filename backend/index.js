const express = require('express');
const mongoose = require('mongoose');
const usuarioRoutes = require('./routes/usuarioRoutes');
const bodyParser = require('body-parser')



//Crear el servidor
const app = express();


//Habilitar el body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))



//Habilitar routing

app.use("/api/ususario", usuarioRoutes());


//puerto y arrancar el servidor

app.listen(4000, async () => {
  try {
    await mongoose.connect('mongodb+srv://jgaviriaq:71294859jgq@cluster0.cxrgni5.mongodb.net/TiendaCiclo4?retryWrites=true', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log("Mongo conectado")
  }
  catch (e) {
    console.log("Error de la conexión a la DB")
  }
  console.log(`Example app listening at http://localhost:4000`)
})