/**
 * SaludoController
 *
 * @description :: Server-side logic for managing saludoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	hola:function(req,res){
       
        if(req.method=='GET')
            {
                res.send('Hola get')
            }
        
          if(req.method=='POST')
            {
                res.send('Hola post')
            }
        else{
             res.send('Hola todos')
        }
        res.json({
            nombre:'jose',
            apellido:'par'
        });
    },
    	QueTal:function(req,res){
        res.send('Que tal');
    }
};

