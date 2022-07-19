const mongoose = require("mongoose");

const Role = mongoose.model(
  "Elements",
  new mongoose.Schema({
    id: Number,
    assists: Number,
    bonus:  Number,
    bps:  Number,
    second_name: String,
    element_type: Number,
    chance_of_playing_next_round:  Number,
    chance_of_playing_this_round:  Number,
    clean_sheets:  Number,
    code:  Number,
    corners_and_indirect_freekicks_text: String,
    cost_change_event:  Number,
    cost_change_event_fall:  Number,
    cost_change_start:  Number,
    cost_change_start_fall: Number,
    creativity:  Number,
    creativity_rank:  Number,
    creativity_rank_type:  Number,
    direct_freekicks_order:  Number,
    direct_freekicks_text: String,
    dreamteam_count: Number,
    first_name: String,
    last_name: String,
    team: Number,
    team_code: Number,
    minutes: Number,
    goals_scored: Number, 
    now_cost: Number, 
    assists: Number, 
    total_points:Number,
  })
);

module.exports = Role;