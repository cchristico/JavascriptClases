/**
 * MascotaController
 *
 * @description :: Server-side logic for managing Mascotas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  crearMascota: function (req, res) {
    var parameters = req.allParams();

    if (req.method == 'POST') {
      if (parameters.nombre && (parameters.fechaNacimiento && parameters.paisNacimiento&&parameters.idRaza)) {
        Mascota.create({
          nombre: parameters.nombre,
          fechaNacimiento: parameters.fechaNacimiento,
          paisNacimiento: parameters.paisNacimiento,
          idRaza: parameters.idRaza,
        }).exec(function (error, mascotaCreado) {
          if (error) return res.view('error', {
            title: 'Error',
            error: {
              descripcion: 'Hubo Problemas creando la mascota, intentalo de nuevo: ' + error,
              url: '/crearMascota'
            }
          });

          Mascota.find().exec(function (error, mascotasEncontrados) {
            if (error) return res.serverError()
            sails.log.info(mascotasEncontrados);
            return res.view('vistas/Mascota/listarMascotas.ejs', {
              title: 'Lista de Mascotas',
              mascotas: mascotasEncontrados
            })
          });

        });
      } else {
        // bad Request
        return res.view('error', {
          title: 'Error',
          error: {
            descripcion: 'No envia todos los parameters',
            url: '/crearMascota'
          }
        });
      }
    } else {
      return res.view('error', {
        title: 'Error',
        error: {
          descripcion: 'Falla en el metodo HTTP',
          url: '/crearMascota'
        }
      });
    }

  },
  editarMascotas: function (req, res) {
  console.log("llego a actualziar");
    var parameters = req.allParams();
    console.log(parameters.nombre+"__"+parameters.paisNacimiento+"__"+parameters.idRaza+"__"+"__"+parameters.fechaNacimiento);
    if (req.method == 'POST') {
      if (parameters.nombre && (parameters.paisNacimiento &&parameters.fechaNacimiento)) {
        Mascota.update({
          id: parameters.id
        }, {
          nombre: parameters.nombre,
          fechaNacimiento: parameters.fechaNacimiento,
          paisNacimiento: parameters.paisNacimiento,
          idRaza: parameters.idRaza
        }).exec(function (error, mascotaCreado) {
          if (error) {
            return res.view('vistas/Error', {
              title: 'Error',
              error: {
                descripcion: 'Hubo un error creando la mascota: ' + error,
                url: '/crearMascota'
              }
            });
          }
          Mascota.find().exec(function (error, mascotasEncontrados) {
            if (error) {
              return res.view('vistas/Error', {
                title: 'Error',
                error: {
                  descripcion: 'Hubo un error editando la mascota, verifique la información: ' + error,
                  url: '/crearMascota'
                }
              });
            }
            return res.view('vistas/Mascota/listarMascotas', {
              title: 'Lista de Mascotas',
              mascotas: mascotasEncontrados
            })
          });

        });

      } else {
        // bad Request
        console.log('NO envio valores');
        return res.view('vistas/Error', {
          title: 'Error',
          error: {
            descripcion: 'No envia todos los parameters',
            url: '/EditarMascotas'
          }
        });
      }
    } else {
      console.log('POST');
      return res.view('vistas/Error', {
        title: 'Error',
        error: {
          descripcion: 'Falla en el metodo HTTP',
          url: '/editarMascota'
        }
      });
    }

  }

};

