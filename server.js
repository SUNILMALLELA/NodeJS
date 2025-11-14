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
app.use('/api/books', bookroutes)
app.use('/api/user', userroutes)
app.use('/api/home', homeroutes)
app.use('/api/admin', adminroutes)
app.use('/api/files', fileRoutes);
app.use('/api/getfiles', fileRoutes)
app.use('/public', express.static('public'))
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`)
})


