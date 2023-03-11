const mongoose = require('mongoose');

const VisitSchema = new mongoose.Schema({
    symptoms: [{
        type: String,
        required: true
    }],
    prescription: {
        type: Schema.Types.ObjectId,
        required: true
    },
    doctorId: {
        type: Schema.Types.ObjectId,
        required: true,
    }
})

module.exports = mongoose.model('Visit', VisitSchema)