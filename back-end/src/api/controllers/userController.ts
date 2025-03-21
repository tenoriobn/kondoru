import { sign } from 'jsonwebtoken';
import jsonSecret from '../config/jsonSecret';
import UserService from '../service/userService';
import AuthService from '../service/authService';
import { Request, Response } from 'express';
import { UserData, UserRegisterData } from 'interface/user';

const userService = new UserService();
const authService = new AuthService();

class UserController {
  static async register(req: Request<any, any, UserRegisterData>, res: Response): Promise<void> {
    const { name, email, date_of_birth, phone, password } = req.body;

    try {
      const user = await userService.register({ name, email, date_of_birth, phone, password });

      if (user) {
        const { accessToken } = await authService.login({ email: user.email, password });
        res.status(201).send({ user, accessToken });
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send({ message: error.message });
      } else {
        res.status(400).send({ message: 'Erro desconhecido' });
      }
    }
  };

  static async getAllUsers(req: Request, res: Response): Promise<void> {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  };

  static async getUserById(req: Request<{id: string}>, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      const user = await userService.getUserById(id);
      res.status(200).json(user);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send({ message: error.message });
      } else {
        res.status(400).send({ message: 'Erro desconhecido' });
      }
    }
  };

  static async updateUser(req: Request<Required<UserData>>, res: Response): Promise<void> {
    const { id } = req.params;
    const { name, email, date_of_birth, phone } = req.body;

    try {
      const user = await userService.updateUser({ id, name, email, date_of_birth, phone });
      res.status(200).json(user);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send({ message: error.message });
      } else {
        res.status(400).send({ message: 'Erro desconhecido' });
      }
    }
  };

  static async deleteUser(req: Request<{id: string}>, res: Response): Promise<void> {
    const { id } = req.params;

    try {
      await userService.deleteUser(id)
      res.status(200).send({ message: 'Usuario deletado com sucesso!' });         
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send({ message: error.message });
      } else {
        res.status(400).send({ message: 'Erro desconhecido' });
      }
    }
  };
}

export default UserController;