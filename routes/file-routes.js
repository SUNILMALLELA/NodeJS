const express = require('express')
const router = express.Router()
const authMiddleware = require('../Middleware/userMiddleware')
const adminMiddleware = require('../Middleware/adminMiddleware')
router.get('/upload', authMiddleware, adminMiddleware, (req, res) => {

})
module.exports = router





// const express = require('express');
// const router = express.Router();
// const multer = require('multer');
// const { uploadImage } = require('../controllers/fileUploadController');
// const upload = multer({ dest: 'uploads/' });
// router.post('/upload', upload.single('myFile'), uploadImage);
// router.post('/upload1', uploadImage);

// module.exports = router;


