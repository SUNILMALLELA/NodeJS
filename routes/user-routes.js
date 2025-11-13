const express = require('express')
const router = express.Router()
const { registerUser, loginUser, changePassword } = require('../controllers/user-controller.js')
const authMiddleware = require('../Middleware/userMiddleware.js')
router.post("/register", registerUser)
router.post("/login", loginUser)
router.post("/changePassword", authMiddleware, changePassword)
module.exports = router

