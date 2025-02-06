const { Router } = require('express');
const RoleController = require('../controllers/roleController');

const router = Router();

router
  .post('/api/roles', RoleController.register)
  .get('/api/roles', RoleController.getAllRoles)
  .get('/api/roles/:id', RoleController.getRoleById)
  .put('/api/roles/:id', RoleController.updateRole)
  .delete('/api/roles/:id', RoleController.deleteRole)

module.exports = router;