const User = require('../models/User');

module.exports = {
  async login(request, response) {
    const { name } = request.params;
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
    const { name } = request.body;
    const user = await User.create(request.body);
    return response.status(200).json(user);
  }
}





