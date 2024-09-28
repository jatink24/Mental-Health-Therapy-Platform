const mongoose = require('mongoose')

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        unique: true
    },
    id:{
        type: Number,
        required: true
    },
    phone:{
        type: Number,
        required: true
    }

})

module.exports = mongoose.models('user',UserSchema);