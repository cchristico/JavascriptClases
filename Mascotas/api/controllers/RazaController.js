/**
 * RazaController
 *
 * @description :: Server-side logic for managing Razas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
  crearRaza: function (req, res) {
    var parametros = req.allParams();

    if (req.method == 'POST') {
      if (parametros.nombre&&(parametros.fechaAparicion&&parametros.continenteOrigen)) {
        Raza.create({
          nombre: parametros.nombre,
          continenteOrigen: parametros.continenteOrigen,
          fechaAparicion: parametros.fechaAparicion
        }).exec(function (error, razaCreada) {
          if (error) return res.view('error', {
            title: 'Error',
            error: {
              descripcion: 'No pudimos crear la raza intentalo de nuevo '+error,
              url: '/crearRaza'
            }
          });
          Raza.find().exec(function (error, razasEncontradas) {
            if (error) return res.serverError()
            sails.log.info(razasEncontradas);
            return res.view('vistas/Raza/listarRazas', {
              title: 'Lista de Razas',
              razas: razasEncontradas
            })
          });
        });
      } else {
        // bad Request
        return res.view('error', {
          title: 'Error',
          error: {
            descripcion: 'No envia todos los parametros',
            url: '/crearRaza'
          }
        });
      }
    } else {
      return res.view('error', {
        title: 'Error',
        error: {
          descripcion: 'Falla en el metodo HTTP',
          url: '/crearRaza'
        }
      });
    }
  },
  editarRaza: function (req,res) {
    var parametros = req.allParams();
    console.log("llego antes del if con lo sigueintes valores"+parametros.id+parametros.nombre+parametros.continenteOrigen+parametros.fechaAparicion);
    if(parametros.id&&(parametros.nombre||parametros.fechaAparicion||parametros.continenteOrigen))
    {
      console.log("pase el if"+parametros);
      var razaEditar={
        nombre: parametros.nombre,
        continenteOrigen: parametros.continenteOrigen,
        fechaAparicion: parametros.fechaAparicion
      };
      console.log("Este es el valor que tengo como variable");
      console.log(razaEditar+parametros.id);
      if(razaEditar.nombre=="")
      {
        delete razaEditar.nombre
      }
      if(razaEditar.fechaAparicion=="")
      {
        delete razaEditar.fechaAparicion
      }
      if(razaEditar.continenteOrigen=="")
      {
        delete razaEditar.continenteOrigen
      }
      Raza.update({
        id: parametros.id
      },razaEditar).exec(function(err,razaEncontrada){
        if(err){
          return res.view('vistas/Error',{
            error:{
              descripcion: "Verificar la infromacion ingresada",
              raeError: err,
              url: "ListarRazas"
            }
          });
        }
        Raza.find().exec(function (err,razaEncontrada) {
          if(err){
            res.view('vistas/Error',{
              error:{
                desripcion: "Hubo un problema cargando las Razas",
                rawError: err,
                url: "/ListarRazas"
              }
            });
          }
          res.view('vistas/Raza/listarRazas',{
            razas: razaEncontrada
          });
        })
      })
    }
    else {
      return res.view('vistas/Error', {
        error: {
          desripcion: "Necesitamos que envies todos los parametros",
          rawError: "No envia Parametros",
          url: "/ListarRazas"
        }
      });
    }

  },
  BorrarRaza: function (req, res) {
    console.log("llego a eliminar valor");
    var parametros = req.allParams();
    if (parametros.id) {
      Raza.destroy({
        id: parametros.id
      }).exec(function (err, RazaRemovida) {
        if (err) {
          return res.view('vistas/Error', {
            error: {
              desripcion: "Tuvimos un Error Inesperado",
              rawError: err,
              url: "/Razas"
            }
          });
        }
        Raza.find()
          .exec(function (errorIndefinido, razaEncontrada) {

            if (errorIndefinido) {
              res.view('vistas/Error', {
                error: {
                  desripcion: "Hubo un problema cargando las Razas",
                  rawError: errorIndefinido,
                  url: "/ListarRazas"
                }
              });
            }

            res.view('vistas/Raza/listarRazas', {
              razas: razaEncontrada
            });
          })
      })

    } else {
      return res.view('vistas/Error', {
        error: {
          desripcion: "Necesitamos el ID para borrar la raza",
          rawError: "No envia ID",
          url: "/ListarRazas"
        }
      });
    }
  }
};

