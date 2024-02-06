import { Router } from "express";
import { create, destroy, getAll, getById, getTasksByProjectId, update } from "../controllers/projects.controller.js";
import validatorRules from "../middlewares/express-validator.js";
import { bodyRules, idParamRule } from "../validations/projects.validation.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.get('/projects', authMiddleware, getAll);
router.post(
    '/projects',
    authMiddleware,
    bodyRules(),
    validatorRules,
    create
);
router.get(
    '/projects/:id',
    authMiddleware,
    idParamRule(),
    validatorRules,
    getById
);
router.put(
    '/projects/:id',
    authMiddleware,
    idParamRule(),
    bodyRules(),
    validatorRules,
    update
);
router.delete(
    '/projects/:id',
    authMiddleware,
    idParamRule(),
    validatorRules,
    destroy
);
router.get('/projects/:id/tasks', authMiddleware, getTasksByProjectId);

export default router;