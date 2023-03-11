const express = require('express');
const app = express();
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config()
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URL)
        .then(console.log('Connected To MongoDB'))
        .catch(err => console.log(err))

app.use('/chat', require('./routes/chatbot'));
app.use('/patient', require('./routes/patient'));
app.listen("5001", () => {
    console.log('Backend Is Running');
})