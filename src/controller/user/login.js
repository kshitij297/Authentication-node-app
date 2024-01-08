const db = require("../../helper/mysql/connection");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = async (req, res) => {
    const { Email, Password } = req.body;
    // let user = {};

    try {
        const user = await new Promise((resolve, reject) => {
            db.query('SELECT * FROM user WHERE Email = ?', [Email], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
        // console.log("user", user);




        //Authentication

        // const userEmail = user[0].Email;
        if(user.length === 0){
            return res.status(401).send({message: "User not found"});
        }
        const userPass = user[0].Password;
        

        const hashedPass = await bcrypt.compare(Password, userPass);
        // console.log("hashed password",hashedPass);

       if(!hashedPass){  
        return res.status(401).send({message: "Password is not valid!"})
       }

        // generating jwt token
        const userId = user[0].Id;
        const secretKey = process.env.SECRETKEY;
        const token = jwt.sign({userId}, secretKey, { expiresIn: '60s' });

        res.status(200).send({message: "User Logged in", token: token})


    } catch (err) {
        console.log("error", err);
        res.status(500).send("Internal server error");
    }
}

module.exports = login;