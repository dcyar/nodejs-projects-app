import { Router } from 'express';
import { login, register } from '../controllers/auth.controller.js';
import { bodyRules, registerBodyRules } from '../validations/auth.validation.js';
import validatorRules from '../middlewares/express-validator.js';

const router = Router();

router.post(
    '/register',
    registerBodyRules(),
    bodyRules(),
    validatorRules,
    register
);
router.post(
    '/login',
    bodyRules(),
    validatorRules,
    login
);

export default router;