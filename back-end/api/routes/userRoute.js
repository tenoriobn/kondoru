const { Router } = require('express');
const UserController = require('../controllers/userController');
const authenticated = require('../middleware/authenticated');
const roles = require('../middleware/roles');
const permissions = require('../middleware/permissions');
const permissionsRole = require('../middleware/permissionsRole');

const router = Router();
router.use(authenticated);

router
  .post('/api/user', permissionsRole(["Adicionar"]), UserController.register)
  .get('/api/users', UserController.getAllUsers)
  .get('/api/user/:id', permissionsRole(["Buscar"]), UserController.getUserById)
  .put('/api/user/:id', permissionsRole(["Editar"]), UserController.updateUser)
  .delete('/api/user/:id', permissionsRole(["Deletar"]), UserController.deleteUser)

module.exports = router;