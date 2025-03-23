import { NextFunction, Request, Response } from 'express';
import AuthService from '../service/authService';

const authService = new AuthService();

class AuthController {
  static async login(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { email, password } = req.body;

    try {
      const login = await authService.login({ email, password });
      res.status(200).send(login);
    } catch(error) {
      next(error);
    }
  }
}

export default AuthController;