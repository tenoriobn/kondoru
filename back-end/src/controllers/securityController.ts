import { Request, Response } from "express";
import SecurityService from "../service/securityService";
import { RegisterAclData, RegisterPermissionsRolesData } from "interface/security";
import { AuthenticatedRequest } from "interface/auth";
const securityService = new SecurityService();

class SecurityController {
  static async registerAcl(req: AuthenticatedRequest, res: Response): Promise<void> {
    const { roles, permissions } = req.body;
    const { userId } = req;

    try {
      const acl = await securityService.registerAcl({ roles, permissions, userId });

      res.status(201).send(acl);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send({ message: error.message });
      } else {
        res.status(400).send({ message: 'Erro desconhecido' });
      }
    }
  };

  static async registerPermissionsRoles(req: Request<RegisterPermissionsRolesData>, res: Response): Promise<void> {
    const { roleId, permissions } = req.body;

    try {
      // Adicionando permissões a uma role
      const permissionsRole = await securityService.registerPermissionsRoles({ roleId, permissions });

      res.status(201).send(permissionsRole);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send({ message: error.message });
      } else {
        res.status(400).send({ message: 'Erro desconhecido' });
      }
    }
  };
}

export default SecurityController;