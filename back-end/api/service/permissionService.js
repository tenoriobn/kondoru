const database = require('../models');
const uuid = require('uuid');

class PermissionService {
  async register(dto) {
    const permission = await database.permissions.findOne({
      where: { name: dto.name }
    });

    if (permission) {
      throw new Error('Permissão já cadastrada!');
    };

    try {
      const newPermissions = await database.permissions.create({
        id: uuid.v4(),
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

  async getPermissionById(id) {
    const permission = await database.permissions.findOne({ where: { id: id } });

    if (!permission) {
      throw new Error('Permissão informada não cadastrada!')
    };

    return permission;
  };

  async updatePermission(dto) {
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

  async deletePermission(id) {
    await this.getPermissionById(id);

    try {
      await database.permissions.destroy({ where: { id: id } });
    } catch (error) {
      throw new Error('Erro ao tentar deletar a Permissão!');
    }
  };
}

module.exports = PermissionService;