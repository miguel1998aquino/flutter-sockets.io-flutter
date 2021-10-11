const {response} = require('express');

const CrearUsuario=(req, res = response)=>{
    res.json({
        ok: true,
        msg: 'CrearUsuario!!!'
    });


}


module.exports ={
    CrearUsuario
}