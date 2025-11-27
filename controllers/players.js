const playersModel = require("../models/players");
const createError = require("http-errors");

const getAllPlayers = async (req, res, next) => {
    try{
        const players = await playersModel.find();

        if(!players){
            return next(createError(500, "Impossible get all players from data base."));
        }

        res.json(players);    
    } catch(err){
        return next(err);
    }
};

const getPlayerById = async (req, res, next) => {
    try{
        const playerId = req.params.id;
        const player = await playersModel.findById(playerId);

        if(!player){
            return next(createError(404, "Player not found."));
        }

        res.json(player);
    } catch(err){
        next(err);
    }
};

const addPlater = async (req, res, next) => {
    const playerInfo = {
        name: req.body.name,
        age: req.body.age
    }
};

module.exports = {
    getAllPlayers,
    getPlayerById
}