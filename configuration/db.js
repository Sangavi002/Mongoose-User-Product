const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017";

const connection = mongoose.connect(`${url}/app`);

module.exports = connection
