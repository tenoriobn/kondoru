import { Request, Response } from 'express';
import RoleService from '../service/roleService';
import { RoleData } from '../interface/role';
const roleService = new RoleService();

class RoleController {
  static async register(req: Request<RoleData>, res: Response): Promise<void> {
    const { name, description } = req.body;

    try {
      const role = await roleService.register({ name, description });
      res.status(201).send(role);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send({ message: error.message });
      } else {
        res.status(400).send({ message: 'Erro desconhecido' });
      }
    }
  };

  static async getAllRoles(req: Request, res: Response): Promise<void> {
    const roles = await roleService.getAllRoles();
    res.status(200).json(roles);
  };

  static async getRoleById(req: Request<{id: string}>, res: Response) {
    try {
      const { id } = req.params;

      const role = await roleService.getRoleById(id);
      
      res.status(200).json(role);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send({ message: error.message });
      } else {
        res.status(400).send({ message: 'Erro desconhecido' });
      }
    }
  };

  static async updateRole(req: Request<Required<RoleData>>, res: Response) {
    const { id } = req.params;
    const { name, description } = req.body;

    try {
      const role = await roleService.updateRole({ id, name, description });
      res.status(200).json(role);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send({ message: error.message });
      } else {
        res.status(400).send({ message: 'Erro desconhecido' });
      }
    }
  };

  static async deleteRole(req: Request<{id: string}>, res: Response) {
    const { id } = req.params;

    try {
      await roleService.deleteRole(id);
      res.status(200).send({ message: 'Role deletada com sucesso!' });         
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send({ message: error.message });
      } else {
        res.status(400).send({ message: 'Erro desconhecido' });
      }
    }
  };
}

export default RoleController;