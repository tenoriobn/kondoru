const { Router } = require('express');
const SecurityController = require('../controllers/securityController');

const router = Router();

router
  .post('/api/seguranca', SecurityController.registerAcl)
  .post('/api/seguranca/permissoes-roles', SecurityController.registerPermissionsRoles)

module.exports = router;