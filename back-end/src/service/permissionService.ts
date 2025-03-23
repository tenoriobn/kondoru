import { PermissionData } from '../interface/permission';
import database from '../database/models'; 
import { v4 as uuidv4 } from 'uuid';
import AppError from '../utils/appError';

class PermissionService {
  async register(dto: PermissionData) {
    const permission = await database.permissions.findOne({
      where: { name: dto.name }
    });

    if (permission) {
      throw new AppError('Permissão já cadastrada!', 409);
    };

    return database.permissions.create({
      id: uuidv4(),
      name: dto.name,
      description: dto.description
    });
  };

  async getAllPermissions() {
    const permissions = await database.permissions.findAll();
    return permissions;
  };

  async getPermissionById(id: string) {
    const permission = await database.permissions.findOne({ where: { id: id } });

    if (!permission) {
      throw new AppError('Permissão informada não cadastrada!', 404);
    };

    return permission;
  };

  async updatePermission(dto: Required<PermissionData>) {
    const permission = await this.getPermissionById(dto.id);

    permission.name = dto.name;
    permission.description = dto.description;
    await permission.save();

    return permission;
  };

  async deletePermission(id: string) {
    await this.getPermissionById(id);
    await database.permissions.destroy({ where: { id: id } });
  };
}

export default PermissionService;