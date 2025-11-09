require('dotenv').config()        
const express = require('express')
const connectDB = require('./database/db') 
const app = express()
const bookroutes = require('./routes/book-routes')
connectDB()
// PORT=3000
// MONGO_URI=mongodb://localhost:27017/booksAPI
app.use(express.json())
app.use('/api/books',bookroutes)
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`)
})
