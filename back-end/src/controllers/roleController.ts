import { NextFunction, Request, Response } from 'express';
import RoleService from '../service/roleService';
import { RoleData } from '../interface/role';
const roleService = new RoleService();

class RoleController {
  static async register(req: Request<RoleData>, res: Response, next: NextFunction): Promise<void> {
    const { name, description } = req.body;

    try {
      const role = await roleService.register({ name, description });
      res.status(201).send(role);
    } catch (error) {
      next(error);
    }
  };

  static async getAllRoles(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const roles = await roleService.getAllRoles();
      res.status(200).json(roles);
    } catch (error) {
      next(error);
    }
  };

  static async getRoleById(req: Request<{id: string}>, res: Response, next: NextFunction): Promise<void> {
    const { id } = req.params;

    try {
      const role = await roleService.getRoleById(id);
      res.status(200).json(role);
    } catch (error) {
      next(error);
    }
  };

  static async updateRole(req: Request<Required<RoleData>>, res: Response, next: NextFunction): Promise<void> {
    const { id } = req.params;
    const { name, description } = req.body;

    try {
      const role = await roleService.updateRole({ id, name, description });
      res.status(200).json(role);
    } catch (error) {
      next(error);
    }
  };

  static async deleteRole(req: Request<{id: string}>, res: Response, next: NextFunction): Promise<void> {
    const { id } = req.params;

    try {
      await roleService.deleteRole(id);
      res.status(200).send({ message: 'Role deletada com sucesso!' });         
    } catch (error) {
      next(error);
    }
  };
}

export default RoleController;