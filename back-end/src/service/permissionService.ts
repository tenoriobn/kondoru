import { PermissionData } from '../interface/permission';
import database from '../database/models'; 
import { v4 as uuidv4 } from 'uuid';

class PermissionService {
  async register(dto: PermissionData) {
    const permission = await database.permissions.findOne({
      where: { name: dto.name }
    });

    if (permission) {
      throw new Error('Permissão já cadastrada!');
    };

    try {
      const newPermissions = await database.permissions.create({
        id: uuidv4(),
        name: dto.name,
        description: dto.description
      });

      return newPermissions;
    } catch (error) {
      throw new Error('Erro ao cadastrar Permissão!');
    }
  };

  async getAllPermissions() {
    const permissions = await database.permissions.findAll();
    return permissions;
  };

  async getPermissionById(id: string) {
    const permission = await database.permissions.findOne({ where: { id: id } });

    if (!permission) {
      throw new Error('Permissão informada não cadastrada!')
    };

    return permission;
  };

  async updatePermission(dto: Required<PermissionData>) {
    const permission = await this.getPermissionById(dto.id);

    try {
      permission.name = dto.name;
      permission.description = dto.description;
      await permission.save();
      return permission;
    } catch (error) {
      throw new Error('Erro ao editar Permissão!');
    }
  };

  async deletePermission(id: string) {
    await this.getPermissionById(id);

    try {
      await database.permissions.destroy({ where: { id: id } });
    } catch (error) {
      throw new Error('Erro ao tentar deletar a Permissão!');
    }
  };
}

export default PermissionService;