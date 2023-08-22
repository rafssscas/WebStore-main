/*si queremos traer objetos literales parseados de un json que
esta en src/model:
const data = require("ruta del json");*/
/*data me llega de esta forma:
* data[
    results: [{},{},{}]
]
*/
//const dataHeros = data.results;
//console.log(dataHeros);
//Destructuring
//const { results } = data;



const path = require("path");
const mainController = {
    home:(req,res) => {
        return res.render('home')
    },
    registro:(req,res) => {
        return res.render('registro')
    },
    login:(req,res) => {
        return res.render('login')
    },
    carrito:(req,res) => {
        return res.render('carrito')
    },
    detalleProducto:(req,res) => {
        return res.render('detalleProducto')
    }
}
module.exports = mainController;