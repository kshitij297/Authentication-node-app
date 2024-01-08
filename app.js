const express = require("express");
const app = express();
require("dotenv").config();
require("./src/helper/mysql/connection");
const wrapRoutes = require("./src/routes/wrap-routes");

app.use(express.json());

app.get('/', async(req,res) => {
    res.send("App with authentication");
})

wrapRoutes(app);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
})
