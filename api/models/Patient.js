const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
    },
    dob: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    visits: [{
        type: mongoose.Schema.Types.ObjectId,
    }],
    prescriptions: [{
        type: mongoose.Schema.Types.ObjectId,
    }]
})

module.exports = mongoose.model('Patient', PatientSchema)
