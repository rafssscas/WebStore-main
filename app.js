const express = require('express');
const app = express();
const path = require('path');

const mainRouter = require("./src/routes/mainRouter");
app.use(mainRouter);

app.use(express.static('public'));

app.listen(5000, ()=>{
    console.log('Servidor funcionando');
});

/*app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/src/views/home.html');
});*/

app.set("view engine", "ejs");