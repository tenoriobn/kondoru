const { Router } = require('express');
const UserController = require('../controllers/userController');
const authenticated = require('../middleware/authenticated');
const roles = require('../middleware/roles');
const permissions = require('../middleware/permissions');
const permissionsRole = require('../middleware/permissionsRole');

const router = Router();
router.use(authenticated);

router
  .post('/usuarios', permissionsRole(["Adicionar"]), UserController.register)
  .get('/usuarios', permissionsRole(["Buscar"]), UserController.getAllUsers)
  .get('/usuarios/:id', permissionsRole(["Buscar"]), UserController.getUserById)
  .put('/usuarios/:id', permissionsRole(["Editar"]), UserController.updateUser)
  .delete('/usuarios/:id', permissionsRole(["Deletar"]), UserController.deleteUser)

module.exports = router;