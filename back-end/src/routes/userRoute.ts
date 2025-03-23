import { Router } from 'express';
import UserController from '../controllers/userController';
import authenticated from '../middleware/authenticated';
import roles from '../middleware/roles';
import permissionsRole from '../middleware/permissionsRole';

const router = Router();

router.use(authenticated);

router
  .post('/api/user', roles(['Administrador']), UserController.register)
  .get('/api/users', UserController.getAllUsers)
  .get('/api/user/:id', permissionsRole(['Buscar']), UserController.getUserById)
  .put('/api/user/:id', permissionsRole(['Editar']), UserController.updateUser)
  .delete('/api/user/:id', roles(['Administrador']), UserController.deleteUser);

export default router;
