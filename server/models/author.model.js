const mongoose = require('mongoose')


const authorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Author must have a name"],
        minLength:[3,"Your author's name must be atleast 3 characters"],
    },
}, {timestamps:true}
)

const Author = mongoose.model('Author',authorSchema)

module.exports = Author