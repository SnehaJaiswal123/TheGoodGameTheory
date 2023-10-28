const mongoose=require('../db/mongoose');

const BookSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    auther:{
        type:String,
        required:true
    },
    publication:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})

const Book= mongoose.model('book',BookSchema)

module.exports=Book


