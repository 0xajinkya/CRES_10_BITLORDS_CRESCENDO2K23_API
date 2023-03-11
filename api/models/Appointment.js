const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true,
    },
    fromTime: {
        type: String,
        required: true,
    },
    toTime: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    docName: {
        type: String,
        required: true
    },
    docField: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: 'Pending'
    }
})

module.exports = mongoose.model('Appointment', AppointmentSchema)
