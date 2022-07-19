const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.elements = require("./elements.model");
db.element_types = require('./elemettypes.model')
db.teams = require('./teams.model');


module.exports = db;