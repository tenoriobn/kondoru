import { Router } from 'express'; 
import AuthController from '../controllers/authController'; 

const router = Router(); 

router
  .post('/api/auth/login', AuthController.login)
  .post('/api/auth/google', AuthController.loginWithGoogle);

export default router;