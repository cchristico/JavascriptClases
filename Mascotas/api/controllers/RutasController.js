module.exports = {
home: function (req, res) {

    // res.view(String: Nombre vista, Datos JSON)
    return res.view('vistas/home', {
      titulo: 'Inicio',
      title: 'Inicio',
      numero: 1,
      mauricio: {
        nombre: 'Mauricio',
        cedula: 1718137159
      },
      usuarios: []
    });
  },
  error: function (req, res) {

      // res.view(String: Nombre vista, Datos JSON)
      return res.view('vistas/Error', {
        title: 'Error',
  });
},
  crearUsuario: function (req, res) {
var parametros

  return res.view('vistas/crearUsuario', {
    title: 'Crear Usuarios'
  })
},
editarUsuario:function(req, res){
  var parametros = req.allParams();
  if(parametros.id)
  {
    Usuario.findOne({
      id:parametros.id
    }).exec(function(errorInesperado,UsuarioEncontrado)
  {
if(errorInesperado)
{

}
//undefined leido como falso ;)
if(UsuarioEncontrado){

}else {

}
  sails.info.log();
  })
  }else {
    return res.view('vistas/Error')
  }
  return res.view('vistas/editarUsaurio')
},

  //     Usuario.findOne({
  //       id: parametros.id
  //     }).exec(function (error, usuarioEncontrado) {
  //       if (error) return res.serverError()
  //       return res.view('vistas/editarUsuario', {
  //         title: 'Editar usuario - ' + usuarioEncontrado.apellidos,
  //         usuario: usuarioEncontrado
  //       })
  //     });
  //
  //   } else {
  //     return res.view('error', {
  //       title: 'Error',
  //       error: {
  //         descripcion: 'No existe el ID'
  //       }
  //     });
  //   }
  // },
  listarUsuarios: function (req, res) {

    Usuario.find().exec(function (error, usuariosEncontrados) {
      if (error) return res.serverError()
      sails.log.info(usuariosEncontrados);
      return res.view('vistas/listarUsuarios', {
        title: 'Lista de Usuarios',
        usuarios: usuariosEncontrados
      })
    });
  }

};
