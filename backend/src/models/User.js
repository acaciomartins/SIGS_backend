const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
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

module.exports = mongoose.model('User', UserSchema);
