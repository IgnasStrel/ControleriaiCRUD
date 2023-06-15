const mongoose = require('mongoose');

const connectDB = async () =>{
    try {
        const connection = await mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASWD}@cluster1.k4voweq.mongodb.net/`)
        console.log('Connecting to MongoDB...',connection.connection.host)
    } catch (error) {
        console.log("Could not connect to MongoDb...", err)
    }
}

   
    module.exports = connectDB;