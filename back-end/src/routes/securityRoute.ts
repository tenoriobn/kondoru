import { Router } from "express";
import SecurityController from "../controllers/securityController"

const router = Router();

router
  .post('/api/seguranca', SecurityController.registerAcl)
  .post('/api/seguranca/permissoes-roles', SecurityController.registerPermissionsRoles)

export default router;