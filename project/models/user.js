var mongoose = require("mongoose");
var schema = require("../schema/users");

module.exports = mongoose.model("users", schema);
