const mongoose = require('mongoose')

const Appointments = new Schema({
    id:{
        type: Number,
        required: true
    },
    patient_name:{
        type: String,
        required: true,
    },
    date:{
        type: Number,
        required: true,
    },
    time:{
        type: Number,
        required: true
    },
    issue:{
        type: String,
        required: true,
    }

})

module.exports = mongoose.models('appointments',Appointments);