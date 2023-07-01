const mongoose = require('mongoose');

const connectToMongoDB = async () => {
        await mongoose.connect(process.env.MONGODB)
        .then(() => console.log('Successfully connected to Mongo'))
        .catch((err) => { console.error(err); });
}

module.exports = connectToMongoDB;