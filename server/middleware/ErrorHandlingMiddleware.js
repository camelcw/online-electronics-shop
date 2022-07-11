const ApiError = require('../Error/ApiError')

module.exports = function(req, res, err, next) {
    if(err instanceof AppError) {
        return res.status(err.status).json({message: err.message})
    }
    return res.status(500).json({message: "Not Found"})
}