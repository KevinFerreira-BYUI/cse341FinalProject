const playersModel = require("../models/players");
const createError = require("http-errors");

const getAllPlayers = async (req, res, next) => {
    const players = await playersModel.find();

    try{
        if(!players){
            return next(createError(500, "Impossible get all players from data base."));
        }

        res.json(players);    
    } catch(err){
        return next(err);
    }
};

const getPlayerById = async (req, res, next) => {

};

module.exports = {
    getAllPlayers
}