const express = require ("express");
const initModels = require("./models/initModels");
const db = require('./utils/database');
const userRoutes = require('./Routes/users.routes');
const app = express();
require("dotenv").config();


const PORT = process.env.PUERTO || 8000;
db.authenticate()
    .then(()=> console.log('autenticacion exitosa'))
    .catch((error)=>console.log(error));

db.sync({ force: false })
    .then(()=> console.log('base sincronizada'))
    .catch((error)=>console.log(error));

initModels();

app.get('/', (req, res)=> {
    res.status(200).json('todo OK');
})

app.use("/api/v1", userRoutes);

app.listen(PORT,()=> console.log('servidor corriendo'+ PORT));