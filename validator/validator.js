
const validator = (schema) => {
    return (req, res, next) => {
        const {err, value} = schema.validate(req.body);

        if(err){
            return res.status(400).json({
                message: err.details[0].message
            });
        }

        req.body = value;
        next();
    };
};