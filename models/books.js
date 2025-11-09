const moongoose = require('mongoose')
const BooksSchema = new moongoose.Schema({
    title:{
        type:String,
        required:[true,'Book title is required'],
        trim:true,
        maxLength:[100,'Book title must be 100 charcters']
    },
     author:{
        type:String,
        required:[true,'Author name is required'],
        trim:true,
    },
     year:{
        type:Number,
        required:[true,'Publication year is required'],
        trim:true,
        min:[1000,'year must be 1000'],
        maxLength:[new Date().getFullYear(),'Year cant be future']
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})
module.exports = moongoose.model('Books',BooksSchema)