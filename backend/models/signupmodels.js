const mongoose=require('mongoose')

const signUpTemplate = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    username:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    Occassion:
    {
         type:String,
         required:true   

    },
    Age:
    {
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    Phone_Number:
    {
        type:Number,
        required:true,
        unique:true
    },
    Gender:
    {
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.model('mytable', signUpTemplate) //second is name of schema