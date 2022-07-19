const express = require('express');
const mongoose = require('mongoose');
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
// const router = express.Router();
const app = express();
const cors = require('cors');


mongoose.connect('mongodb+srv://carolsens:C9FlSefDdlqG6Tsx@desafio.zqf2u.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

app.use(cors());
app.use(express.json());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.listen(process.env.PORT || '3000', () => {
    console.log('rodando na porta 3000')
});

const CandidatoSchema = new mongoose.Schema({
    cargoPretendido: { type: String, unique: false, required: true},
    profissao: { type: String, unique: false, required: true},
    nomeCompleto: { type: String, unique: false, required: true},
    dataNascimento: { type: String, unique: false, required: true},
    sexo: { type: String, unique: false, required: true},
    estadoCivil: { type: String, unique: false, required: true},     
    identidade: { type: String, unique: false, required: true},
    cpf: { type: String, unique: true, required: true},
    veiculo: { type: String, unique: false, required: true},
    habilitacao: { type: String, unique: false, required: true},
    telefoneFixo1: { type: String, unique: false, required: true},
    telefoneFixo2: { type: String, unique: false, required: true},
    celular: { type: String, unique: false, required: true},
    contato: { type: String, unique: false, required: true},
    email: { type: String, unique: true, required: true},
    cep: { type: String, unique: false, required: true},
    logradouro: { type: String, unique: false, required: true},
    numerocasa: { type: String, unique: false, required: true},
    complemento: { type: String, unique: false, required: true},
    bairro: { type: String, unique: false, required: true},
    cidade: { type: String, unique: false, required: true},
    estado: { type: String, unique: false, required: true},
}, {
    timestamps: true
});


const Candidato = mongoose.model('Candidato', CandidatoSchema);


app.get('/', (req, res) => {
    return res.status(200).send('Hello World!');
});

app.post('/register', (req, res) => {

    const { cargoPretendido, profissao, nomeCompleto, dataNascimento, sexo, estadoCivil, identidade, cpf, veiculo, habilitacao, 
        telefoneFixo1, telefoneFixo2, celular, contato, email, cep, logradouro, numerocasa, complemento, bairro, cidade, estado 
    } = req.body;

    const newCandidato = new Candidato();

    newCandidato.cargoPretendido = cargoPretendido;
    newCandidato.profissao = profissao;
    newCandidato.nomeCompleto = nomeCompleto;
    newCandidato.dataNascimento = dataNascimento;
    newCandidato.sexo = sexo;
    newCandidato.estadoCivil = estadoCivil;
    newCandidato.identidade = identidade;
    newCandidato.cpf = cpf;
    newCandidato.veiculo = veiculo;
    newCandidato.habilitacao = habilitacao;
    newCandidato.telefoneFixo1 = telefoneFixo1;
    newCandidato.telefoneFixo2 = telefoneFixo2;
    newCandidato.celular = celular;
    newCandidato.contato = contato;
    newCandidato.email = email;
    newCandidato.cep = cep;
    newCandidato.logradouro = logradouro;
    newCandidato.numerocasa = numerocasa;
    newCandidato.complemento = complemento;
    newCandidato.bairro = bairro;
    newCandidato.cidade = cidade;
    newCandidato.estado = estado;   

    
    newCandidato.save((err, savedCandidato) => {
        if (err) {

            console.log(err); 
            //console.log("meu teste:");
            //console.log(err.keyPattern.cpf);

            if ((err.keyPattern.cpf) == "1") {
                return res.status(501).send('CPF já cadastrado');
            }
            else {
            return res.status(500).send('Ocorrência de erro');
            }        
        }       
        
        return res.status(200).send(savedCandidato);
    });
});






   
   
      


   
    




 




