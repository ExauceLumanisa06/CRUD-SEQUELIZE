const jwt = require("jsonwebtoken")

const verifyToken = (req,res,next) => {

    const token = req.body.token || req.query.token || req.headers["x-accesstoken"]
    try {
        if(!token) return res.status(403).send("token is required")
        else{
            const decoded = jwt.verify(token,"secretkey")
            req.user = decoded
        }
        
    } catch (error) {
        return res.status(401).send("token is required")
    }
    return next()
}

module.exports = verifyToken