const express = require('express');
const path = require('path');
require('dotenv').config();
//*DBconnection
const {dbConecction} = require('./database/config');
dbConecction();
//*app de expess
const app = express();

//*lectura y parseo del body
app.use(express.json());
//*node server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);

require('./sokects/socket');



//*path publico

const publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));

//*mis rutas
app.use('/api/login',require('./routes/auth'));

server.listen(process.env.PORT, (err) => {
    if (err) throw new Error(err);
    console.log('Servidor corriendo en el puerto', process.env.PORT);
})