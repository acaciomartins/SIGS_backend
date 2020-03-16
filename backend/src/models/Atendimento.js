const mongoose = require('mongoose');

const AtendimentoSchema = new mongoose.Schema({
    idLogin: {
        type: String,
        required: true,
    },
    nome: {
        type: String,
        required: true,
    },
    atendente: {
        type: String,
        required: true,
    },
    formaAtendimento: {
        type: String,
        required: true,
    },
    situacao: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Atendimento', AtendimentoSchema);
