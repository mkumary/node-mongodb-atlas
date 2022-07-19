const mongoose = require("mongoose");

const Role = mongoose.model(
  "ElementTypes",
  new mongoose.Schema({
    element_count: Number,
    id: Number,
    plural_name: String,
    plural_name_short: String,
    singular_name: String,
    singular_name_short: String,
    squad_max_play: Number,
    squad_min_play: Number,
    squad_select: Number,
    ui_shirt_specific: Boolean,
  })
);

module.exports = Role;