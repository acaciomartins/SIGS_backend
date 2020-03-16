const User = require('../models/User');

module.exports = {
    async show(request, responde) {
        routeName: 'show'
        await User.findByIdAndUpdate();
    },

    store(request, response) {
        const {
            nome,
            atendente,
            forma_atendimento,
            descricao
        } = request.body;

        User.find({ user: nome })

        return response.status(200).send({
            routeName: 'store'
        });
    }
}
