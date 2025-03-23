import { RoleData } from '../interface/role';
import database from '../database/models'; 
import { v4 as uuidv4 } from 'uuid';
import AppError from '../utils/appError';

class RoleService {
  async register(dto: RoleData) {
    const role = await database.roles.findOne({
      where: { name: dto.name }
    });

    if (role) {
      throw new AppError('Role já cadastrada!', 409);
    };

    return database.roles.create({
      id: uuidv4(),
      name: dto.name,
      description: dto.description
    });
  };

  async getAllRoles() {
    const roles = await database.roles.findAll();

    if (!roles) {
      throw new AppError('Nenhuma Role encontrada!', 404);
    };

    return roles;
  };

  async getRoleById(id: string) {
    const role = await database.roles.findOne({ where: { id: id }});

    if (!role) {
      throw new AppError('Role informada não cadastrada!', 404);
    };

    return role;
  };

  async updateRole(dto: Required<RoleData>) {
    const role = await this.getRoleById(dto.id);

    role.name = dto.name;
    role.description = dto.description;
    await role.save();

    return role;
  };

  async deleteRole(id: string) {
    await this.getRoleById(id);
    await database.roles.destroy({ where: { id: id } });
  };
}

export default RoleService;