const router = require('express').Router();
const { default: mongoose } = require('mongoose');
const Appointment = require('../models/Appointment');
const Patient = require('../models/Patient');

router.post('/add', async (req, res) => {
    try {
        const patientId = req.get('patientId');
        console.log(patientId);
        const patient = await Patient.findById(patientId);
        console.log(patient);
        if (patient) {
            const newAppointment = new Appointment(req.body);
            const appointment = await newAppointment.save();
            console.log(appointment);
            const patientSearched = await Patient.findByIdAndUpdate(patientId, {$push: {appointments: appointment._id}})
            res.status(200).json(patientSearched)
        }
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router;