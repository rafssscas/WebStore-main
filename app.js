const express = require('express');
const app = express();
const path = require('path');

const mainRouter = require("./src/routes/mainRouter");
app.use('/', mainRouter);

//TODO JSON - con esto podemos usar objetos literales 
//desde un archivo json que puede estar ubicado en src/model
//app.use(express.json());


app.use(express.static('public'));

app.listen(5000, ()=>{
    console.log('Servidor funcionando');
});

/*app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/src/views/home.html');
});*/
/*Si los views no estan al mismo nivel que app.js o con otro
nombre diferente a views: 
app.set("views", './src/views');*/
app.set("view engine", "ejs");