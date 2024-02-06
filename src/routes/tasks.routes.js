import { Router } from 'express';
import { create, destroy, getAll, getById, update } from '../controllers/tasks.controller.js';
import { bodyRules, idParamRule } from '../validations/tasks.validation.js';
import validatorRules from '../middlewares/express-validator.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = Router();

router.get('/tasks', authMiddleware, getAll);
router.post(
    '/tasks',
    authMiddleware,
    bodyRules(),
    validatorRules,
    create
);
router.get(
    '/tasks/:id',
    authMiddleware,
    idParamRule(),
    validatorRules,
    getById
);
router.put(
    '/tasks/:id',
    authMiddleware,
    idParamRule(),
    bodyRules(),
    validatorRules,
    update
);
router.delete(
    '/tasks/:id',
    authMiddleware,
    idParamRule(),
    validatorRules,
    destroy
);

export default router;