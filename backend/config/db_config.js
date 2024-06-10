const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`DB Connected Successfully : ${conn.connection.host}`.bgBlue.white);
    } catch (error) {
        console.log(`DB Connection Failed : ${error.message}`.bgRed.white);
    }
}

module.exports = connectDB;

