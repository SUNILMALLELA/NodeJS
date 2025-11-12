const mongoose = require('mongoose')
const fileSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    publicID: {
        type: String,
        required: true
    },
    uploadBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    }
},
    { timestamps: true }
)
module.exports = fileSchema