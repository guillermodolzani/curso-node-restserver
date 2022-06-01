const{response, request}=require('express')


const usuariosGet=(req=request, res=response)=> {

    const {q, name="no name", apikey, page, limit}=req.query

    res.json({
        msg: 'get API-controlador',
        q,
        name,
        apikey,
        page,
        limit //con esto reflejo lo que viene en el query
    })
  }

  const usuariosPut=(req, res)=> {
    const {id} =req.params //req es pq es la solicitud, params porque es lo que viene en el parametro de la url e id es orque es el nombre que le asigne en la ruta.
    // si tuvieramos varios id y quisieramos todos, podemos desestructurar el id así:
    // const {id}=req.params.id
    res.json({
        msg: 'put API- actualizar data',  //put por lo general se usa para actualizar data
        id //para tomar lo que vienee n la request
    })
  }

  const usuariosPost=(req, res)=> {

    const {nombre,edad}=req.body

    res.json({
        msg: 'post API- nuevo recurso',  //se usa post por lo general para crear nuevos recursos
        nombre, edad
    })
  }

  const usuariosDelete= (req, res)=> {
    res.json({
        msg: 'delete API-borrar'   //generalmente se usa para borrar algo
    })
}


        // this.app.delete('/api',  (req, res)=> {
        //     res.json({
        //         msg: 'delete API'

        //el this.app.delete se usa pq antes lo tenia dentro del constructor de mi clase
 

  module.exports={
      usuariosGet,
      usuariosPut,
      usuariosPost,
      usuariosDelete
  }