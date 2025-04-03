import { RoleData } from '../interface/role';
import database from '../database/models'; 
import { v4 as uuidv4 } from 'uuid';
import AppError from '../utils/appError';

class RoleService {
  async register(dto: RoleData) {
    const role = await database.Roles.findOne({
      where: { name: dto.name }
    });

    if (role) {
      throw new AppError('Role já cadastrada!', 409);
    };

    return database.Roles.create({
      id: uuidv4(),
      name: dto.name,
      description: dto.description
    });
  };

  async getAllRoles() {
    const roles = await database.Roles.findAll();
    
    if (roles.length < 1) {
      throw new AppError('Nenhuma Role encontrada!', 404);
    };

    return roles;
  };

  async getRoleById(id: string) {
    const role = await database.Roles.findOne({ where: { id: id }});

    if (!role) {
      throw new AppError('Role informada não cadastrada!', 404);
    };

    return role;
  };

  async updateRole(dto: Required<RoleData>) {
    const role = await this.getRoleById(dto.id);

    if (dto.name && dto.name !== role.name) {
      const roleExists = await database.Roles.findOne({
        where: { name: dto.name },
        attributes: ['id']
      });
  
      if (roleExists) {
        throw new AppError('Já existe uma Role com este nome. Use um nome diferente.', 409);
      }
    }

    await role.update(dto, { validate: true, fields: Object.keys(dto) });

    return role;
  };

  async deleteRole(id: string) {
    await this.getRoleById(id);
    await database.Roles.destroy({ where: { id: id } });
  };
}

export default RoleService;