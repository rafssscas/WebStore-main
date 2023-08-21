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
module.exports=mainController;