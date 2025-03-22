import { RoleData } from '../interface/role';
import database from '../database/models'; 
import { v4 as uuidv4 } from 'uuid';

class RoleService {
  async register(dto: RoleData) {
    const role = await database.roles.findOne({
      where: { name: dto.name }
    });

    if (role) {
      throw new Error('Role já cadastrada!');
    };

    try {
      const newRole = await database.roles.create({
        id: uuidv4(),
        name: dto.name,
        description: dto.description
      });

      return newRole;
    } catch (error) {
      console.log('error: ', error)

      throw new Error('Erro ao cadastrar Role!');
    }
  };

  async getAllRoles() {
    try {
      const roles = await database.roles.findAll();
      return roles;
    } catch (error) {
      throw new Error('Erro ao buscar todas as Roles!');
    }
  };

  async getRoleById(id: string) {
    try {
      const role = await database.roles.findOne({ where: { id: id }});

      if (!role) {
        throw new Error('Role informada não cadastrada!')
      };
  
      return role;
    } catch (error) {
      throw new Error('Erro ao buscar Role!');
    }
  };

  async updateRole(dto: Required<RoleData>) {
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

  async deleteRole(id: string) {
    await this.getRoleById(id);

    try {
      await database.roles.destroy({ where: { id: id } });
    } catch (error) {
      throw new Error('Erro ao tentar deletar a Role!');
    }
  };
}

export default RoleService;