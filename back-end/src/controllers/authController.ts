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

  static async loginWithGoogle(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { idToken } = req.body;

    try {
      const result = await authService.loginWithGoogle(idToken);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export default AuthController;