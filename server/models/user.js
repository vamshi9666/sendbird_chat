import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    userName: {
        type:String,
        required:true
    },
    nickName: {
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('User', userSchema);