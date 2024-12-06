const UserService = require('../service/userService');
const userService = new UserService();

class userController {
  static async register(req, res) {
    const { name, email, password } = req.body;

    try {
      const user = await userService.register({ name, email, password });
      res.status(201).send(user);
    } catch (error) {
      res.status(400).send({ message: error.message});
    }
  };

  static async getAllUsers(req, res) {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  };

  static async getUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await userService.getUserById(id);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };

  static async updateUser(req, res) {
    const { id } = req.params;
    const { name, email } = req.body;

    try {
      const user = await userService.updateUser({ id, name, email });
      res.status(200).json(user);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };

  static async deleteUser(req, res) {
    const { id } = req.params;

    try {
      await userService.deleteUser(id)
      res.status(200).send({ message: 'Usuario deletado com sucesso!' });         
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };
}

module.exports = userController;