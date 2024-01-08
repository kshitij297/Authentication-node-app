const db = require("../../helper/mysql/connection");
const bcrypt = require("bcrypt");

const createData = async(req,res) => {
    const{Name,Password,Email,City,Country} = req.body;

    const hashedPass = await bcrypt.hash(Password,10);
    // console.log(hashedPass);

    try{
        db.query('INSERT INTO user (Name,Password,Email,City,Country) VALUES(?,?,?,?,?)', [Name,hashedPass,Email,City,Country], (err,result) => {
            if(err){
                return res.send({message: "Email already exist"})
            };
            res.status(200).send({message: "Data added succesfully"})
        })
    } catch(err){
        // console.log("error",err);
        res.status(500).send("Internal server error");
    }
}

module.exports = createData;