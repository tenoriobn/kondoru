const { Router } = require('express');
const PermissionController = require('../controllers/permissionController');

const router = Router();

router
  .post('/permission', PermissionController.register)
  .get('/permissions', PermissionController.getAllPermissions)
  .get('/permission/:id', PermissionController.getPermissionById)
  .put('/permission/:id', PermissionController.updatePermission)
  .delete('/permission/:id', PermissionController.deletePermission)

module.exports = router;