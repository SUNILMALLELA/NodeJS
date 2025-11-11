const express = require('express')
const router = express.Router()
const authMiddleware = require('../Middleware/userMiddleware')
const adminMiddleware = require('../Middleware/adminMiddleware')
router.get('/welcome', authMiddleware, adminMiddleware, (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to Admin Page",
    })
})
module.exports = router