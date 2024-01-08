const mongoose = require("mongoose");

const querySchema = new mongoose.Schema({
    query: {
        type: String,
        // required: [true, "query is required"]
    }
})

module.exports = mongoose.model('query',querySchema);