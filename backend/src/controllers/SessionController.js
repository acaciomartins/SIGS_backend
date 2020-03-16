const User = require('../models/User');

module.exports = {
  async login(request, response) {
    const { name } = request.params;
    console.log('name: ', name);
    const user = await User.find({ name })

    if (user.length == 0) {
      return response.send(404);
    } else {
      return response.status(200).json({
        user
      });
    }
  },

  async store(request, response) {
    //se pa nem precisa agora
    const { name } = request.body;

    // const user = await User.create({
    //   name,
    // });
    const user = await User.create(request.body);

    console.log(user);
    return response.status(200).json(user);
  }
}





