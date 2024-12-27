const RoleService = require('../service/roleService');
const roleService = new RoleService();

class RoleController {
  static async register(req, res) {
    const { name, description } = req.body;

    try {
      const role = await roleService.register({ name, description });
      res.status(201).send(role);
    } catch (error) {
      res.status(400).send({ message: error.message});
    }
  };

  static async getAllRoles(req, res) {
    const roles = await roleService.getAllRoles();
    res.status(200).json(roles);
  };

  static async getRoleById(req, res) {
    try {
      const { id } = req.params;
      const role = await roleService.getRoleById(id);
      res.status(200).json(role);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };

  static async updateRole(req, res) {
    const { id } = req.params;
    const { name, description } = req.body;

    try {
      const role = await roleService.updateRole({ id, name, description });
      res.status(200).json(role);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };

  static async deleteRole(req, res) {
    const { id } = req.params;

    try {
      await roleService.deleteRole(id)
      res.status(200).send({ message: 'Role deletada com sucesso!' });         
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };
}

module.exports = RoleController;