import { body, param } from "express-validator";

export const bodyRules = () => {
    return [
        body('name')
            .notEmpty().withMessage('Name is required.')
            .isString().withMessage('Name must be a string.')
            .isLength({ min: 3 }).withMessage('Name must be at least 3 characters.'),
        body('priority')
            .isNumeric().withMessage('Priority must be a number.')
            .isInt({ min: 1, max: 10 }).withMessage('Priority must be between 1 and 10.'),
        body('description').optional().isLength({ max: 100 }),
    ];
}

export const idParamRule = () => {
    return [
        param('id').isInt().withMessage('Id must be an integer'),
    ];
}