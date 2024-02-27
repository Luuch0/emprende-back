require("dotenv").config()
const http = require("http")

function requestController (){
    //Logica de nuestra funcion
console.log("Recibimos una nueva request")
}

//Configurar nuestro servidor
const server = http.createServer(requestController)

const PORT = process.env.PORT

server.listen(PORT, function() {
    console.log("Aplicacion corriendo en el puerto: " + PORT)
})
