const getData = require("../../controller/user/get");
const createData = require("../../controller/user/create");
const deleteData = require("../../controller/user/delete");
const login = require("../../controller/user/login");
const verify = require('../../controller/user/verify');
const connectRoutes = (app) => {
    app.get("/api/get",getData);
    app.post("/api/create",createData);
    app.post("/api/login",login);
    app.get("/api/verify", verify);    
    app.delete("/api/delete/:id",deleteData);
}

module.exports = connectRoutes;