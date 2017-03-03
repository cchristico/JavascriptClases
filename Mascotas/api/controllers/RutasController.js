/**
 * RutasController
 *
 * @description :: Server-side logic for managing Rutas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  home: function (req, res) {
    return res.view('vistas/home');
  },
  crearUsuario: function (req, res) {
    return res.view('vistas/Usuario/crearUsuario');
  },
  crearRaza: function (req, res) {
    return res.view('vistas/Raza/crearRaza');
  },
  editarRaza: function (req, res) {
    var parametros = req.allParams();
    console.log("llego a ruta y envio los valores ovio");
    console.log(parametros);
    if (parametros.id) {
      Raza.findOne({
        id: parametros.id
      }).exec(function (errorInesperado, RazaEncontrada) {
        if (errorInesperado) {
          return res.view('vistas/Error', {
            error: {
              desripcion: "Error Inesperado",
              rawError: errorInesperado,
              url: "/ListarRazas"
            }
          });
        }
        if (RazaEncontrada) {
          return res.view("vistas/Raza/editarRaza", {
            razas: RazaEncontrada
          });
        } else {
          return res.view('vistas/Error', {
            error: {
              desripcion: "La raza con id: " + parametros.id + " no existe.",
              rawError: "No existe el usuario",
              url: "/ListarRazas"
            }
          });
        }
      })
    } else {

      return res.view('vistas/Error', {
        error: {
          desripcion: "No ha enviado el parametro ID",
          rawError: "Faltan Parametros",
          url: "/ListarRazas"
        }
      });

    }
  },

  listarRazas: function(req,res){
    Raza.find()
      .exec(function (errorIndefinido, RazasEncontradas) {
        if (errorIndefinido) {
          res.view('vistas/Error', {
            error: {
              desripcion: "Hubo un problema cargando las razas",
              rawError: errorIndefinido,
              url: "/ListarRazas"
            }
          });
        }

        res.view('vistas/Raza/listarRazas', {
          razas: RazasEncontradas
        });
      })
  },
  login: function (req, res) {
    return res.view('/login', {
      error: {
        desripcion: "Usted esta por error en esta Ruta dirijase a Inicio",
        rawError: "Ruta equivocada",
        url: "/Login"
      }

    });
  },
  error: function (req, res) {
    return res.view('vistas/Error', {
      error: {
        desripcion: "Usted esta por error en esta Ruta dirijase a Inicio",
        rawError: "Ruta equivocada",
        url: "/Inicio"
      }
    });
  },
  listarUsuarios: function (req, res) {

    Usuario.find()
      .exec(function (errorIndefinido, usuariosEncontrados) {

        if (errorIndefinido) {
          res.view('vistas/Error', {
            error: {
              desripcion: "Hubo un problema cargando los Usuarios",
              rawError: errorIndefinido,
              url: "/ListarUsuarios"
            }
          });
        }

        res.view('vistas/Usuario/ListarUsuarios', {
          usuarios: usuariosEncontrados
        });
      })
  },
  editarUsuario: function (req, res) {

    var parametros = req.allParams();

    if (parametros.id) {

      Usuario.findOne({
        id: parametros.id
      }).exec(function (errorInesperado, UsuarioEncontrado) {
        if (errorInesperado) {
          return res.view('vistas/Error', {
            error: {
              desripcion: "Error Inesperado",
              rawError: errorInesperado,
              url: "/ListarUsuarios"
            }
          });
        }
        if (UsuarioEncontrado) {
          return res.view("vistas/Usuario/editarUsuario", {
            usuarioAEditar: UsuarioEncontrado
          });
        } else {
          return res.view('vistas/Error', {
            error: {
              desripcion: "El usuario con id: " + parametros.id + " no existe.",
              rawError: "No existe el usuario",
              url: "/ListarUsuarios"
            }
          });
        }
      })
    } else {

      return res.view('vistas/Error', {
        error: {
          desripcion: "No ha enviado el parametro ID",
          rawError: "Faltan Parametros",
          url: "/ListarUsuarios"
        }
      });

    }
  },
  crearMascota: function (req,res) {
    Raza.find().exec(function (error, razasEncontrados) {
      if (error) return res.serverError();
      return res.view('vistas/Mascota/CrearMascota', {
        title: 'Crear Mascota',
        razas: razasEncontrados
      });
    });
  },
  listarMascotas: function (req,res) {

    Mascota.find()
      .exec(function (errorIndefinido, MascotasEncontradas) {
        if (errorIndefinido) {
          res.view('vistas/Error', {
            error: {
              desripcion: "Hubo un problema cargando las razas",
              rawError: errorIndefinido,
              url: "/ListarMascotas"
            }
          });
        }
        res.view('vistas/Mascota/listarMascotas', {
          mascotas: MascotasEncontradas
        });
      })
  },
  editarMascotas: function(req,res){
    var parametros = req.allParams();
    if (parametros.id) {
      Mascota.findOne({
        id: parametros.id
      }).exec(function (error, mascotaEncontrado) {
        if (error) return res.view('error', {
          title: 'Error',
          error: {
            descripcion: 'Fallo al buscar la mascota',
            url: '/crearMascotas'
          }
        });


        Raza.find().exec(function (error, razasEncontrados) {
          if (error) return res.view('error', {
            title: 'Error',
            error: {
              descripcion: 'Fallo al buscar la mascota',
              url: '/crearMascotas'
            }
          });

          return res.view('vistas/Mascota/editarMascotas', {
            title: 'Editar Mascota - ' + mascotaEncontrado.nombre,
            mascotas: mascotaEncontrado,
            razas: razasEncontrados
          })
        });

      });

    } else {
      return res.view('error', {
        title: 'Error',
        error: {
          descripcion: 'No existe el ID'
        }
      });
    }
  }
};
