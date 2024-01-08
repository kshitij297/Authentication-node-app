const jwt = require("jsonwebtoken");
require("dotenv")

const validateUser = async(req, res) => {
    const token = req.header("Authorization");
    const secretKey = process.env.SECRETKEY;
    if(!token){
            return res.status(401).send({message: "Access denied"});
    };

    try{
        const decode = jwt.verify(token,secretKey);
        req.userId = decode.userId;
        console.log(req.userId);

        res.status(200).send({message: "Access granted"});
    } catch(err) {
        // console.log("err",err)   
        res.status(500).send({message: "Invalid token or token expires"});
    }
}

module.exports = validateUser;