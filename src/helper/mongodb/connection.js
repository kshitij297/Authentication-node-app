const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = async() => {
    const { MONGO_URL } = process.env
    console.log(MONGO_URL);

    try {
        const conn = await mongoose.connect(MONGO_URL);
        if(conn){
            console.log("Mongodb connected");
        }
    } catch (err) {
        console.log("Connection failed");
    }
}
