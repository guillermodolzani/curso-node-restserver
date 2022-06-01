const express = require('express')
const cors=require('cors')

class Server{

    constructor(){
        this.app  = express()
        this.port=process.env.PORT
        this.usuariosPath='/api/usuarios'
//me creo en mi servidor cuando se larga una nueva instancia en mi servidor, me creo la app de express como una propiedad en la clase del servidor
        this.middlewares()
        this.routes()
}
        //Middlewares -> son funciones uqe van a añadir otra funcionalidad al webserver...es una funcion qeu se va a ejecutar cuando levantamos el servidor
    middlewares(){

        //CORS
        this.app.use(cors())

        //lectura y parseo del body
        this.app.use(express.json()) 

        //directorio publico
        this.app.use(express.static('public'))
    }


        //Rutas de mi aplicacion

    routes(){
        this.app.use(this.usuariosPath, require('../routes/user'))
        
    }
    
    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Corriendo en el puerto', this.port)
        })
    }
}


module.exports=Server;