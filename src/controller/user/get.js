const db = require("../../helper/mysql/connection")
const getData = async(req,res) => {

    try{
        db.query('SELECT * FROM user', (err,result) => {
            if(err) throw err;
            res.status(200).send({message: "Data retrived succesfully", data: result})
        })
    } catch(err){
        console.log("error",err);
        res.status(500).send("Internal server error");
    }
}

module.exports = getData;