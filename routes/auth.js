/*
path:/api/login
*/
const{Router} = require('express');
const { CrearUsuario } = require('../controllers/auth');

const router = Router();


router.post('/new', CrearUsuario);




module.exports = router;
