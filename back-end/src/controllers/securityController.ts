import { NextFunction, Request, Response } from 'express';
import SecurityService from '../service/securityService';
import { RegisterPermissionsRolesData } from 'interface/security';
import { AuthenticatedRequest } from 'interface/auth';
const securityService = new SecurityService();

class SecurityController {
  static async registerRoleUser(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> {
    const { userId, roleId } = req.body;

    try {
      const acl = await securityService.registerRoleUser({ userId, roleId });
      res.status(201).send(acl);
    } catch (error) {
      next(error); 
    }
  };

  static async registerPermissionsUser(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> {
    const { userId, permissionsId } = req.body;

    try {
      const acl = await securityService.registerPermissionsUser({ userId, permissionsId });
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
    const { roleId, permissionsId } = req.body;

    try {
      const permissionsRole = await securityService.registerPermissionsRoles({ roleId, permissionsId });

      res.status(201).send(permissionsRole);
    } catch (error) {
      next(error); 
    }
  };
}

export default SecurityController;