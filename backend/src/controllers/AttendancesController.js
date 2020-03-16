const Atendimento = require('../models/Atendimento');

module.exports = {
    async show(request, response) {
        const { idLogin } = request.params;
        const atendimento = await Atendimento.find({ idLogin })
        return response.status(200).json({
            atendimento
        });
    },

    async store(request, response) {
        const atendimento = await Atendimento.create(request.body);
        return response.json(atendimento);
    }
}
