// Requiring validate schemas
const {
    playerSchema,
    teamsSchema
} = require("../validator/ValSchemas")


// Validador Middlware
const validatorMiddleware = (schema) => {
    return (req, res, next) => {
        const {error, value} = schema.validate(req.body);

        if(error){
            return res.status(400).json({
                message: error.details[0].message
            });
        }

        req.body = value;
        next();
    };
};

// Validators
const validadePlayer = validatorMiddleware(playerSchema);
const validadeTeam = validatorMiddleware(teamsSchema);


module.exports = {
    validadePlayer,
    validadeTeam
}