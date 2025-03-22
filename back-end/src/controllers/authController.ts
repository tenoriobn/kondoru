import { Request, Response } from 'express';
import AuthService from '../service/authService';

const authService = new AuthService();

class AuthController {
  static async login(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body;

    try {
      const login = await authService.login({ email, password });

      res.status(200).send(login);
    } catch(error) {
      if (error instanceof Error) {
        res.status(400).send({ message: error.message });
      } else {
        res.status(400).send({ message: 'Erro desconhecido' });
      }
    }
  }
}

export default AuthController;