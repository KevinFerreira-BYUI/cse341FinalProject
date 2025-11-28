const mongoose = require("../db/db");

const teamsSchema = new mongoose.Schema(
    {
        club_name: {type: String, unique: true},
        country: String,
        city: String,
        foundation_year: String,
        stadium_name: String,
        team_badge: String
    },
    {
        collation: "teams",
        versionKey: false
    }
);

module.exports = mongoose.model("teams", teamsSchema);