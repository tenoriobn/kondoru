const { Router } = require('express');
const UserController = require('../controllers/userController');
const authenticated = require('../middleware/authenticated');

const router = Router();
router.use(authenticated);

router
  .post('/usuario', UserController.register)
  .get('/usuarios', UserController.getAllUsers)
  .get('/usuario/:id', UserController.getUserById)
  .put('/usuario/:id', UserController.updateUser)
  .delete('/usuario/:id', UserController.deleteUser)

module.exports = router;