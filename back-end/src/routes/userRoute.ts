import { Router } from 'express';
import UserController from '../controllers/userController';
import authenticated from '../middleware/authenticated';
import roles from '../middleware/roles';
import permissionsRole from '../middleware/permissionsRole';

const router = Router();

router
  .post('/api/user', UserController.register)
  .post('/api/user/forgot-password', UserController.forgotPassword)
  .post('/api/user/reset-password', UserController.resetPassword)
  .get('/api/user/verify-reset-token/:token', UserController.verifyResetToken);

router.use(authenticated);
router
  .get('/api/users', UserController.getAllUsers)
  .get('/api/user/:id', permissionsRole(['Buscar']), UserController.getUserById)
  .put('/api/user/:id', permissionsRole(['Editar']), UserController.updateUser)
  .delete('/api/user/:id', roles(['Administrador']), UserController.deleteUser);

export default router;
