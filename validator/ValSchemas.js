const Joi = require("@hapi/joi");

// Schema to validate players 
const playerSchema = Joi.object({
   name: Joi.string().max(25).required(),
   age: Joi.number().min(8).max(100).required(),
   nationality: Joi.string().max(20).required(),
   position: Joi.string().max(20).required(),
   club: Joi.string().max(15).required(),
   career_goals: Joi.number().max(1000).required(),
   height: Joi.number().min(1.40).max(2.50).required(),
   dominant_foot: Joi.string().min(4).max(5).required(),
   image: Joi.string().uri().required()
});


module.exports = {
    playerSchema
}

