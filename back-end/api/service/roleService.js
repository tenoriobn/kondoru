const database = require('../models');
const uuid = require('uuid');

class RoleService {
  async register(dto) {
    const role = await database.roles.findOne({
      where: { name: dto.name }
    });

    if (role) {
      throw new Error('Role já cadastrada!');
    };

    try {
      const newRole = await database.roles.create({
        id: uuid.v4(),
        name: dto.name,
        description: dto.description
      });

      return newRole;
    } catch (error) {
      throw new Error('Erro ao cadastrar Role!');
    }
  };

  async getAllRoles() {
    const roles = await database.roles.findAll();
    return roles;
  };

  async getRoleById(id) {
    const role = await database.roles.findOne({ where: { id: id }});

    if (!role) {
      throw new Error('Role informada não cadastrada!')
    };

    return role;
  };

  async updateRole(dto) {
    const role = await this.getRoleById(dto.id);

    try {
      role.name = dto.name;
      role.description = dto.description;
      await role.save();
      return role;
    } catch (error) {
      throw new Error('Erro ao editar Role!');
    }
  };

  async deleteRole(id) {
    await this.getRoleById(id);

    try {
      await database.roles.destroy({ where: { id: id } });
    } catch (error) {
      throw new Error('Erro ao tentar deletar a Role!');
    }
  };
}

module.exports = RoleService;