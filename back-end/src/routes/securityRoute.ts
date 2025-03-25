import { Router } from 'express';
import SecurityController from '../controllers/securityController';

const router = Router();

router
  .post('/api/seguranca/role-user', SecurityController.registerRoleUser)
  .post('/api/seguranca/permissions-user', SecurityController.registerPermissionsUser)
  .post('/api/seguranca/permissions-roles', SecurityController.registerPermissionsRoles);

export default router;