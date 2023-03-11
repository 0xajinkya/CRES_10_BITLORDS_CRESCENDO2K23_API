const router = require('express').Router();
const Patient = require('../models/Patient');

router.post('/create', async (req, res) => {
    try {
        const newPatient = new Patient(req.body)
        const patient = await newPatient.save();

        res.status(200).json(patient);
        return;
    } catch (error) {
        res.status(400).json(error);
        return;
    }
})

router.post('/login', async (req, res) => {
    const { id, email } = req.query;
    var patient;
    try {
        if (id) {
            patient = await Patient.findById(id);
            if(patient.password === req.body.password){
            res.status(200).json({message: "True"})
            }else{
            res.status(200).json({message: "False"})
            }
        } else if (email) {
            if(patient.password === req.body.password){
                res.status(200).json({message: "True"})
                }else{
                res.status(200).json({message: "False"})
                }
        } else {
            res.status(400).json({message: 'User Not Found'})
        }
    } catch (error) {
        res.status(400).json(error);
        return;
    }
})

module.exports = router;