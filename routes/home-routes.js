const express = require('express')
const router = express.Router()
const authMiddleware = require('../Middleware/userMiddleware')
router.get('/welcome', authMiddleware, (req, res) => {
    const { username, userId, role } = req.userInfo
    res.status(200).json({
        success: true,
        message: "Welcome to Home Page",
        user: {
            _id: userId,
            username,
            role
        }
    })
})
module.exports = router