/**
 * Usuario.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
       nombres:{
           type:'string',
           minLength:5
       },
       apellidos:{
           type:'string',
           minLength:5
       },
       correo:{
           type:'string',
           email:true,
           required:true,
           unique:true
       },
       tipo:{
           type:'string',
           enum:['Perfil','Usuarios','Correos'],
           defaultsTo:'Usuarios'
       }


  },
   beforeCreate: function (values, cb) {

     //sails.log.info(values);

    //  cb()
    //  cb()
   }
};
