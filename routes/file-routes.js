const express = require('express')
const router = express.Router()
const authMiddleware = require('../Middleware/userMiddleware')
const adminMiddleware = require('../Middleware/adminMiddleware')
const fileMiddleware = require('../Middleware/fileMiddleware')
const { uploadImage, getImage, deleteImage } = require('../controllers/fileUploadController')
router.post('/upload', authMiddleware, adminMiddleware, fileMiddleware.single('image'), uploadImage)
router.get('/uploads', authMiddleware, getImage)
router.delete('/:id', authMiddleware, adminMiddleware, deleteImage)
module.exports = router






