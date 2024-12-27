const { Router } = require('express');
const RoleController = require('../controllers/roleController');

const router = Router();

router
  .post('/role', RoleController.register)
  .get('/roles', RoleController.getAllRoles)
  .get('/role/:id', RoleController.getRoleById)
  .put('/role/:id', RoleController.updateRole)
  .delete('/role/:id', RoleController.deleteRole)

module.exports = router;