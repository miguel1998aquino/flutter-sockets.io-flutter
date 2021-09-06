const{io}=require('../index');
//*mensajes de socket
io.on('connection', client => {
    console.log('Cliente connectado');
    client.on('disconnect', () => {
        console.log('cliente desonectado');
    });

    client.on('mensaje', (payload) => {
        console.log('Mensaje!!', payload)

        io.emit('mensaje',{admin:'mensaje nuevo'});
    })
});