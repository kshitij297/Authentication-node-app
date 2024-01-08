const db = require("../../helper/mysql/connection");

const deleteData = async(req,res) => {
    const {id} = req.params;
    try{
         db.query('DELETE FROM user WHERE Id = ?',[id],(err,result) => {
            if(err) throw err;
            res.status(200).send({message: "User deleted"});
        })
    } catch(err){
        console.log("err",err);
        res.status(500).send({message: "Internal server error"});
    }
}

module.exports = deleteData;



// const result = await db.execute("DELETE FROM user WHERE Id = ?", [id]);

// if(result.affectedRows > 0){
//  res.status(200).send({message: "User deleted"});
// } else{
//  res.status(404).send({message: "User not found"});
// }