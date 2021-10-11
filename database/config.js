const mongoose = require('mongoose');

const dbConecction = async () => {
    try {
        await mongoose.connect(process.env.DB_CNN);
        console.log('DB is connected');
    } catch (error) {
        console.log(error);
        throw new Error('Error en la base de datos')
    }
}

module.exports = {
    dbConecction
};