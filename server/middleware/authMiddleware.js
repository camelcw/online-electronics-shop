const jwt = require('jsonwebtoken')

module.exports = function(req, res, next) {
    if(req.method === 'OPTIONS') {
        next()
    }
    try {
        const token = req.headers.authorization.split('')[1];
        console.log(token);
        if(!token) {
            res.status(401).json({message: 'Unauthorized'})
        }
        const verifyPassword = jwt.verify(token, process.env.CRYPTO_KEY)
        req.user = verifyPassword
        next()

    } catch(e) {
        res.status(401).json({message: 'Unauthorized'})
    }
}