const mysqldb = require("../../helper/mysql/connection");
const userSchema = require("../../models/userSchema");
const querySchema = require("../../models/querySchema");
const getData = async(req,res) => {
    try{
        const getQuery = 'SELECT * FROM user'
        const userData = await new Promise((resolve,reject) => {
            mysqldb.query(getQuery, (err,result) => {
            if(err){
                reject(err);
            } else{
                resolve(result);
            }
        })
        })

        // console.log(userData);
        // console.log("query",getQuery);

        // add user data into mongodb
        const data = [];
        for (const userRecord of userData) {
            const addData = new userSchema(userRecord);
            data.push(addData);
        }
        const savedData = await userSchema.insertMany(data);

        // add query into mongodb;
        const query = new querySchema({query: getQuery});
        const queryData = await query.save()

        res.status(200).send({message: "Data Addedd succesfully", data: savedData, query: queryData});

    } catch(err){
        console.log("error",err);
        res.status(500).send("Internal server error");
    }
}

module.exports = getData;