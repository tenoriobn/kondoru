const PermissionService = require('../service/permissionService');
const permissionService = new PermissionService();

class PermissionController {
  static async register(req, res) {
    const { name, description } = req.body;

    try {
      const permission = await permissionService.register({ name, description });
      res.status(201).send(permission);
    } catch (error) {
      res.status(400).send({ message: error.message});
    }
  };

  static async getAllPermissions(req, res) {
    const permissions = await permissionService.getAllPermissions();
    res.status(200).json(permissions);
  };

  static async getPermissionById(req, res) {
    try {
      const { id } = req.params;
      const permission = await permissionService.getPermissionById(id);
      res.status(200).json(permission);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };

  static async updatePermission(req, res) {
    const { id } = req.params;
    const { name, description } = req.body;

    try {
      const permission = await permissionService.updatePermission({ id, name, description });
      res.status(200).json(permission);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };

  static async deletePermission(req, res) {
    const { id } = req.params;

    try {
      await permissionService.deletePermission(id)
      res.status(200).send({ message: 'Permissão deletada com sucesso!' });         
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };
}

module.exports = PermissionController;