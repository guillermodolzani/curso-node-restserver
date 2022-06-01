const{Router}=require('express') //desestructuro routes que viene del paquete de express
const{usuariosGet,usuariosPut,usuariosPost,usuariosDelete,}=require('../controllers/user')

//router va a permitirme llamar al a funcion Router()

const router=Router()
router.get('/', usuariosGet )

  router.put('/:id',usuariosPut  )
  router.post('/',usuariosPost  )
router.delete('/', usuariosDelete)

module.exports=router