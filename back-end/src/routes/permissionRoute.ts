import { Router } from 'express';
import PermissionController from '../controllers/permissionController';

const router = Router();

router
  .post('/api/permissoes', PermissionController.register)
  .get('/api/permissoes', PermissionController.getAllPermissions)
  .get('/api/permissoes/:id', PermissionController.getPermissionById)
  .put('/api/permissoes/:id', PermissionController.updatePermission)
  .delete('/api/permissoes/:id', PermissionController.deletePermission);

export default router;