import { Request, Response, NextFunction } from 'express';
import UserService from '../services/userService';

class UserController {
  static async getAllProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await UserService.getLogin();

      if (user === null) {
        throw new Error('Email ou senha inválida');
      } else {
        res.json(user);
      }
    } catch (ex) {
      next(ex);
    }
  }
}

export default UserController;
