import { Router } from "express";
import { create, destroy, getAll, getById, getTasksByProjectId, update } from "../controllers/projects.controller.js";
import validatorRules from "../middlewares/express-validator.js";
import { bodyRules, idParamRule } from "../validations/projects.validation.js";

const router = Router();

router.get('/projects', getAll);
router.post(
    '/projects',
    bodyRules(),
    validatorRules,
    create
);
router.get(
    '/projects/:id',
    idParamRule(),
    validatorRules,
    getById
);
router.put(
    '/projects/:id',
    idParamRule(),
    bodyRules(),
    validatorRules,
    update
);
router.delete(
    '/projects/:id',
    idParamRule(),
    validatorRules,
    destroy
);
router.get('/projects/:id/tasks', getTasksByProjectId);

export default router;