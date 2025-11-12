require('dotenv').config()
const express = require('express')
const connectDB = require('./database/db')
const app = express()
const bookroutes = require('./routes/book-routes')
const userroutes = require('./routes/user-routes')
const homeroutes = require('./routes/home-routes')
const adminroutes = require('./routes/admin-routes')
const fileRoutes = require('./routes/file-routes')
connectDB()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/books', bookroutes)
app.use('/api/user', userroutes)
app.use('/api/home', homeroutes)
app.use('/api/admin', adminroutes)
app.use('/api/files', fileRoutes);
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`)
})


// CLOUDINARY_CLOUD_NAME=dhzx98mex
// CLOUDINARY_API_KEY=325596253216391
// CLOUDINARY_API_SECRET=u3AXYUNbWM4oMXl4vdXHSo1c7K8
