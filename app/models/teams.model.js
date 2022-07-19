const mongoose = require("mongoose");

const Role = mongoose.model(
  "Teams",
  new mongoose.Schema({
    code: Number,
    draw: Number,
    form: Object,
    id: Number,
    loss: Number,
    name: String,
    played: Number,
    points: Number,
    position: Number,
    pulse_id: Number,
    short_name: String,
    strength: Number,
    strength_attack_away: Number,
    strength_attack_home: Number,
    strength_defence_away: Number,
    strength_defence_home: Number,
    strength_overall_away: Number,
    strength_overall_home: Number,
    team_division: Object,
    unavailable: Boolean,
    win: Number,
  })
);

module.exports = Role;