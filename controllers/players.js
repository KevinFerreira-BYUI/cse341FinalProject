const playersModel = require("../models/players");
const createError = require("http-errors");
const {playerAddedMsg, playerUpdateMsg, playerDelMsg} = require("../utils/message");

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
        age: req.body.age,
        nationality: req.body.nationality,
        position: req.body.position,
        club: req.body.club,
        career_goals: req.body.career_goals,
        height: req.body.height,
        dominant_foot: req.body.dominant_foot,
        image: req.body.image
    }

    try{
        const player = await playersModel.create(playerInfo);

        res.json({
            message: playerAddedMsg(playerInfo.name)
        });

    } catch(err){
        next(err);
    }
};

const updatePlayer = async (req, res, next) => {
    const playerInfo = {
        name: req.body.name,
        age: req.body.age,
        nationality: req.body.nationality,
        position: req.body.position,
        club: req.body.club,
        career_goals: req.body.career_goals,
        height: req.body.height,
        dominant_foot: req.body.dominant_foot,
        image: req.body.image
    }

    try{
        const playerId = req.params.id;
        const findPlayerId = await playersModel.findById(playerId);
        if (!findPlayerId){
            return next(createError(400, "Invalid ID."));
        }

        const player = await playersModel.findByIdAndUpdate(playerId,playerInfo);

        res.json({
            message: playerUpdateMsg(playerInfo.name)
        });

    } catch(err){
        next(err);
    }
};

const deletePLayer = async (req, res, next) => {
    try{
        const playerId = req.params.id;
        const playerName = await playersModel.findById(playerId)
        
        if(!playerName){
            return next(createError(400, "Invalid ID"));
        }

        const player = await playersModel.findByIdAndDelete(playerId);

        res.json({
            message: playerDelMsg(playerName.name)
        })
    } catch(err){
        next(err);
    }
};


module.exports = {
    getAllPlayers,
    getPlayerById,
    addPlater,
    updatePlayer,
    deletePLayer
}