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



    // costumers: [{
    //     name: String,
    //     attendances: [{
    //         attended_by: String,
    //         description: String,
    //         state_of_attendance: String
    //         /* expected inputs for 'state_of_attendance':
    //             - Em aberto
    //             - Em andamento
    //             - Atendido
    //             - Cancelado
    //         */
    //     }],
    //     purchases: [{
    //         name: String,
    //         value: Number,
    //     }]
    // }]
});

module.exports = mongoose.model('Atendimento', AtendimentoSchema);
