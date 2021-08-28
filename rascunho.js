const express = require('express');
const mongoose = require('mongoose');
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const routes = require('./routes');
const app = express();
const cors = require('cors');


mongoose.connect('mongodb+srv://awsUser:YwrWqqecAY4vqMTQ@cluster0.k32ju.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true
});
app.use(cors());
app.use(express.json());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(routes);
app.listen('5000', () => {
    console.log('rodando na porta 5000');
});

/////////////////////////////////////////////////////

const express = require('express');
const CandidateController = require('./controllers/CandidateController');
const routes = new express.Router();

routes.post('/register', CandidateController.register);
routes.get('/', (req, res) => {
    res.send('itimalia');
});
module.exports = routes;

/////////////////////////////////////////////////////


const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    name: { type: String, unique: false, required: true },
    email: { type: String, unique: true, required: true },
    gender: { type: String, unique: false, required: true },
    cep: { type: String, unique: false, required: true }
}, {
    timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema);



//////////////////////////////////////////////////////

const Candidate = require('../models/Candidate');

module.exports = {
    async register(req, res) {

        const { email, gender, name, cep } = req.body;

        const newCandidate = new Candidate();

        newCandidate.email = email;
        newCandidate.name = name;
        newCandidate.gender = gender;
        newCandidate.cep = cep;

        newCandidate.save((err, savedCandidate) => {
            if (err) {
                console.log(err);
                return res.status(500).send('iti malia deu probleminha!');
            }

            return res.status(200).send(savedCandidate);
        });
    },



};