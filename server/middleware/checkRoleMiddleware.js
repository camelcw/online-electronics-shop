const jwt = require('jsonwebtoken')

module.exports = function (role) {
    return function(req, res, next) {
        if(req.method === 'OPTIONS') {
            next()
        }
        try {
            const token = req.headers.authorization.split('')[1];
            console.log(token);
            if(!token) {
                res.status(401).json({message: 'Unauthorized'})
            }
            const verify = jwt.verify(token, process.env.CRYPTO_KEY)
            if(verify.role !== role) {
                res.status(403).json({message: 'You dont have access!'})
            }
            req.user = verify
            next()
    
        } catch(e) {
            res.status(401).json({message: 'Unauthorized'})
        }
    }
}

