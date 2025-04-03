import { PermissionData } from '../interface/permission';
import database from '../database/models'; 
import { v4 as uuidv4 } from 'uuid';
import AppError from '../utils/appError';

class PermissionService {
  async register(dto: PermissionData) {
    const permission = await database.Permissions.findOne({
      where: { name: dto.name }
    });

    if (permission) {
      throw new AppError('Permissão já cadastrada!', 409);
    };

    return database.Permissions.create({
      id: uuidv4(),
      name: dto.name,
      description: dto.description
    });
  };

  async getAllPermissions() {
    const permissions = await database.Permissions.findAll();

    if (permissions.length < 1) {
      throw new AppError('Nenhuma Permissão encontrada!', 404);
    };

    return permissions;
  };

  async getPermissionById(id: string) {
    const permission = await database.Permissions.findOne({ where: { id: id } });

    if (!permission) {
      throw new AppError('Permissão informada não cadastrada!', 404);
    };

    return permission;
  };

  async updatePermission(dto: Required<PermissionData>) {
    const permission = await this.getPermissionById(dto.id);

    if (dto.name && dto.name !== permission.name) {
      const permissionExists = await database.Permissions.findOne({
        where: { name: dto.name },
        attributes: ['id']
      });
  
      if (permissionExists) {
        throw new AppError('Já existe uma Permissão com este nome. Escolha um nome único.', 409);
      }
    }

    await permission.update(dto, { validate: false });
    // permission.name = dto.name;
    // permission.description = dto.description;
    // await permission.save();

    return permission;
  };

  async deletePermission(id: string) {
    await this.getPermissionById(id);
    await database.Permissions.destroy({ where: { id: id } });
  };
}

export default PermissionService;