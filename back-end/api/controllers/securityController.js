const SecurityService = require('../service/securityService');
const securityService = new SecurityService();

class SecurityController {
  static async registerAcl(req, res) {
    const { roles, permissions } = req.body;
    const { userId } = req;

    try {
      // Access control list (ACL)
      const acl = await securityService.registerAcl({ roles, permissions, userId });

      res.status(201).send(acl);
    } catch (error) {
      res.status(400).send({ message: error.message});
    }
  };

  static async registerPermissionsRoles(req, res) {
    const { roleId, permissions } = req.body;

    try {
      // Adicionando permissões a uma role
      const permissionsRole = await securityService.registerPermissionsRoles({ roleId, permissions });

      res.status(201).send(permissionsRole);
    } catch (error) {
      res.status(400).send({ message: error.message});
    }
  };
}

module.exports = SecurityController;