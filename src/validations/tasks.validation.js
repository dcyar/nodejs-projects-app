import { body, param } from "express-validator";

export const bodyRules = () => {
    return [
        body('title')
            .notEmpty().withMessage('Title is required.')
            .isString().withMessage('Title must be a string.')
            .isLength({ min: 3 }).withMessage('Title must be at least 3 characters.'),
        body('priority')
            .isNumeric().withMessage('Priority must be a number.')
            .isInt({ min: 1, max: 10 }).withMessage('Priority must be between 1 and 10.'),
        body('completed').optional().isBoolean().withMessage('Completed must be a boolean.'),
        body('projectId').optional().isInt().withMessage('ProjectId must be an integer.')
    ];
}

export const idParamRule = () => {
    return [
        param('id').isInt().withMessage('Id must be an integer'),
    ];
}