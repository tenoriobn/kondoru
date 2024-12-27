const { Router } = require('express');
const SecurityController = require('../controllers/securityController');

const router = Router();

router
  .post('/seguranca', SecurityController.registerAcl)
  .post('/seguranca/permissoes-roles', SecurityController.registerPermissionsRoles)

module.exports = router;