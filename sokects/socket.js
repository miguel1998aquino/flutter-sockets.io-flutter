const{io}=require('../index');
const Band = require('../models/band');
const Bands = require('../models/bands');

const bands = new Bands();

bands.addBand(new Band('Queen'));
bands.addBand(new Band('Led Zeppelin'));
bands.addBand(new Band('The Rolling Stones'));
bands.addBand(new Band('The Beatles'));






//*mensajes de socket
io.on('connection', client => {
    console.log('Cliente connectado');

    client.emit('active-bands', bands.getBands());
    client.on('disconnect', () => {
        console.log('cliente desonectado');
    });

    client.on('mensaje', (payload) => {
        console.log('Mensaje!!', payload)

        io.emit('mensaje',{admin:'mensaje nuevo'});
    });

    client.on('vote-band', (payload) => {


        bands.voteBand(payload.id);
        io.emit('active-bands', bands.getBands());
    });

    client.on('add-band', (payload) => {

        const band = new Band(payload.name);
        bands.addBand(band);
        io.emit('active-bands', bands.getBands());
    });

    client.on('delete-band', (payload) => {

        bands.deleteBand(payload.id);
        io.emit('active-bands', bands.getBands());
    });

    // client.on('emitir-mensaje', (payload) => {
    //     // console.log('Mensaje emitido', payload)
    //     // io.emit('nuevo-mensaje',payload);
    //     client.broadcast.emit('nuevo-mensaje',payload);
    // })
});