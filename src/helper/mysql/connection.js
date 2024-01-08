const mysql = require("mysql2");

const connectDb = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'UserInfo'
})

connectDb.connect((err) => {
    if(err){
        console.log("connection failed")
    } else{
        console.log("Database connected s")
    } 
})

module.exports = connectDb;