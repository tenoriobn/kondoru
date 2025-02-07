const { Router } = require('express');
const UserController = require('../controllers/userController');
const authenticated = require('../middleware/authenticated');
const roles = require('../middleware/roles');
const permissions = require('../middleware/permissions');
const permissionsRole = require('../middleware/permissionsRole');

const router = Router();
router.use(authenticated);

router
  .post('/api/usuarios', permissionsRole(["Adicionar"]), UserController.register)
  .get('/api/usuarios', UserController.getAllUsers)
  .get('/api/usuarios/:id', permissionsRole(["Buscar"]), UserController.getUserById)
  .put('/api/usuarios/:id', permissionsRole(["Editar"]), UserController.updateUser)
  .delete('/api/usuarios/:id', permissionsRole(["Deletar"]), UserController.deleteUser)

module.exports = router;