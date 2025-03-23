import { NextFunction, Request, Response } from 'express';
import PermissionService from '../service/permissionService';
import { PermissionData } from 'interface/permission';
const permissionService = new PermissionService();

class PermissionController {
  static async register(req: Request<PermissionData>, res: Response, next: NextFunction): Promise<void> {
    const { name, description } = req.body;

    try {
      const permission = await permissionService.register({ name, description });
      res.status(201).send(permission);
    } catch (error) {
      next(error);
    }
  };

  static async getAllPermissions(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const permissions = await permissionService.getAllPermissions();
      res.status(200).json(permissions);
    } catch (error) {
      next(error);
    }
  };

  static async getPermissionById(req: Request<{id: string}>, res: Response, next: NextFunction): Promise<void> {
    const { id } = req.params;

    try {
      const permission = await permissionService.getPermissionById(id);
      res.status(200).json(permission);
    } catch (error) {
      next(error);
    }
  };

  static async updatePermission(
    req: Request<Required<PermissionData>>, 
    res: Response, 
    next: NextFunction
  ): Promise<void> {
    const { id } = req.params;
    const { name, description } = req.body;

    try {
      const permission = await permissionService.updatePermission({ id, name, description });
      res.status(200).json(permission);
    } catch (error) {
      next(error);
    }
  };

  static async deletePermission(req: Request<{id: string}>, res: Response, next: NextFunction): Promise<void> {
    const { id } = req.params;

    try {
      await permissionService.deletePermission(id);
      res.status(200).send({ message: 'Permissão deletada com sucesso!' });         
    } catch (error) {
      next(error);
    }
  };
}

export default PermissionController;