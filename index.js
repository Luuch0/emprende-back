const http = require("http")
const { CLIENT_RENEG_LIMIT } = require("tls")

function requestController (){
    //Logica de nuestra funcion
console.log("Recibimos una nueva request")
}

//Configurar nuestro servidor
const server = http.createServer(requestController)

server.listen(4000)
