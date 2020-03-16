const Atendimento = require('../models/Atendimento');

module.exports = {
    async show(request, response) {
        const { idLogin } = request.params;
        console.log('idLogin: ', idLogin);

        const atendimento = await Atendimento.find({ idLogin })

        console.log(atendimento);
        return response.status(200).json({
            atendimento
        });
    },


    async store(request, response) {

        const atendimento = await Atendimento.create(request.body);
        console.log(atendimento);
        return response.json(atendimento);
    }
}
