import { NextFunction, Request, Response } from 'express';
import SecurityService from '../service/securityService';
import { RegisterPermissionsRolesData } from 'interface/security';
import { AuthenticatedRequest } from 'interface/auth';
const securityService = new SecurityService();

class SecurityController {
  static async registerAcl(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> {
    const { roles, permissions } = req.body;
    const { userId } = req;

    try {
      const acl = await securityService.registerAcl({ roles, permissions, userId });

      res.status(201).send(acl);
    } catch (error) {
      next(error); 
    }
  };

  static async registerPermissionsRoles(
    req: Request<RegisterPermissionsRolesData>, 
    res: Response, 
    next: NextFunction
  ): Promise<void> {
    const { roleId, permissions } = req.body;

    try {
      // Adicionando permissões a uma role
      const permissionsRole = await securityService.registerPermissionsRoles({ roleId, permissions });

      res.status(201).send(permissionsRole);
    } catch (error) {
      next(error); 
    }
  };
}

export default SecurityController;