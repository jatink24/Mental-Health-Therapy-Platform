const mongoose = require('mongoose')

const DoctorSchema = new Schema({
    id:{
        type: Number,
        required: true
    },
    name:{
        type: String,
        required: true,
    },
    specialization:{
        type: String,
        required: true,
    },
    experience:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    phone:{
        type:Number,
        required:true,
        unique: true
    },
    location:{
        type: String,
        required: true
    }

})

module.exports = mongoose.models('doctor',DoctorSchema);