//similar a webserver nada mas uqe sirve tambien, aparte de servir contenido estático, poder regresar informacion mediante conmunicación por JSON. es decir vamos a crear nuestros endpoints que van a regresar cierta info en formato JSON.


require('dotenv').config() //para tomar los valores del archivo .env y establezca las variables de entorno

const Server = require('./models/server')


const server=new Server()

server.listen()