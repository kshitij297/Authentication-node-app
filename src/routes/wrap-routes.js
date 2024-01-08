const connectRoutes = require("../routes/user/index");

const wrapRoutes = (app) => {
    connectRoutes(app);
}

module.exports = wrapRoutes;
