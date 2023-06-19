const mongoose = require('mongoose');
const mongoURI = process.env.MONGODB;

const connectToMongoDB = async () => {
    
        await mongoose.connect('mongodb+srv://YashDave:daveyash@cluster0.nop9ukm.mongodb.net/iNotebook')
        .then(() => console.log('Successfully connected to Mongo'))
        .catch((err) => { console.error(err); });
}

module.exports = connectToMongoDB;