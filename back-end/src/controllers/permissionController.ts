// const PermissionService = require('../service/permissionService');
import { Request, Response } from 'express';
import PermissionService from '../service/permissionService';
import { PermissionData } from 'interface/permission';
const permissionService = new PermissionService();

class PermissionController {
  static async register(req: Request<PermissionData>, res: Response): Promise<void> {
    const { name, description } = req.body;

    try {
      const permission = await permissionService.register({ name, description });
      res.status(201).send(permission);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send({ message: error.message });
      } else {
        res.status(400).send({ message: 'Erro desconhecido' });
      }
    }
  };

  static async getAllPermissions(req: Request, res: Response): Promise<void> {
    const permissions = await permissionService.getAllPermissions();
    res.status(200).json(permissions);
  };

  static async getPermissionById(req: Request<{id: string}>, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const permission = await permissionService.getPermissionById(id);
      res.status(200).json(permission);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send({ message: error.message });
      } else {
        res.status(400).send({ message: 'Erro desconhecido' });
      }
    }
  };

  static async updatePermission(req: Request<Required<PermissionData>>, res: Response): Promise<void>  {
    const { id } = req.params;
    const { name, description } = req.body;

    try {
      const permission = await permissionService.updatePermission({ id, name, description });
      res.status(200).json(permission);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send({ message: error.message });
      } else {
        res.status(400).send({ message: 'Erro desconhecido' });
      }
    }
  };

  static async deletePermission(req: Request<{id: string}>, res: Response): Promise<void> {
    const { id } = req.params;

    try {
      await permissionService.deletePermission(id);
      res.status(200).send({ message: 'Permissão deletada com sucesso!' });         
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send({ message: error.message });
      } else {
        res.status(400).send({ message: 'Erro desconhecido' });
      }
    }
  };
}

export default PermissionController;

// module.exports = PermissionController;