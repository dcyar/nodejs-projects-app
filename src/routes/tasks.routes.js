import { Router } from 'express';
import { create, destroy, getAll, getById, update } from '../controllers/tasks.controller.js';
import { bodyRules, idParamRule } from '../validations/tasks.validation.js';
import validatorRules from '../middlewares/express-validator.js';

const router = Router();

router.get('/tasks', getAll);
router.post(
    '/tasks',
    bodyRules(),
    validatorRules,
    create
);
router.get(
    '/tasks/:id',
    idParamRule(),
    validatorRules,
    getById
);
router.put(
    '/tasks/:id',
    idParamRule(),
    bodyRules(),
    validatorRules,
    update
);
router.delete(
    '/tasks/:id',
    idParamRule(),
    validatorRules,
    destroy
);

export default router;