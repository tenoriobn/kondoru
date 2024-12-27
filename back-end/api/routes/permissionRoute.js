const { Router } = require('express');
const PermissionController = require('../controllers/permissionController');

const router = Router();

router
  .post('/permissoes', PermissionController.register)
  .get('/permissoes', PermissionController.getAllPermissions)
  .get('/permissoes/:id', PermissionController.getPermissionById)
  .put('/permissoes/:id', PermissionController.updatePermission)
  .delete('/permissoes/:id', PermissionController.deletePermission)

module.exports = router;