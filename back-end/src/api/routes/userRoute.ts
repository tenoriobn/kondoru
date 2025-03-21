import { Router } from "express";
import UserController from "../controllers/userController";
import authenticated from "../middleware/authenticated";
import roles from "../middleware/roles";
import permissionsRole from '../middleware/permissionsRole';

const router = Router();

// Usando o middleware de autenticação
router.use(authenticated);

// Definindo as rotas
router
  .post('/api/user', roles(["Administrador"]), UserController.register)
  .get('/api/users', UserController.getAllUsers)
  .get('/api/user/:id', permissionsRole(["Buscar"]), UserController.getUserById)
  .put('/api/user/:id', permissionsRole(["Editar"]), UserController.updateUser)
  .delete('/api/user/:id', permissionsRole(["Deletar"]), UserController.deleteUser);

// Exportando o roteador
export default router;
