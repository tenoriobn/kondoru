const { Router } = require('express');
const RoleController = require('../controllers/roleController');

const router = Router();

router
  .post('/roles', RoleController.register)
  .get('/roles', RoleController.getAllRoles)
  .get('/roles/:id', RoleController.getRoleById)
  .put('/roles/:id', RoleController.updateRole)
  .delete('/roles/:id', RoleController.deleteRole)

module.exports = router;