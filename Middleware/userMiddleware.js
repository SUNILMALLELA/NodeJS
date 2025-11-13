const jwt = require('jsonwebtoken')
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization']
    //console.log(authHeader);
    const token = authHeader && authHeader.split(' ')[1]
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Access Deined ! no token provided please login to continue"

        })
    }
    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.userInfo = decodedToken
        // console.log(decodedToken);
        next()

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Access Deined ! no token provided please login to continue",
            error: error.message

        })

    }

}
module.exports = authMiddleware