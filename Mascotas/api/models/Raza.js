/**
 * Raza.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre: {
      type: 'string',
      required: true
    },
    continenteOrigen: {
      type: 'string',
      enum: ['America', 'Asia', 'Africa','Europa','Ociania']
    },
    fechaAparicion: {
      type: 'date'
    },
    // idRaza es el nombre del Foreign Key
    mascotas: {
      // Collection -> Nombre del Modelo en Sails
      collection: 'Mascota',
      // Via-> Es el campo por el cual vamos a relacionar FOREIGN KEY
      via: 'idRaza'
    }
  }
};

