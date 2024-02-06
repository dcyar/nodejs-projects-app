import { body } from "express-validator";

export const registerBodyRules = () => {
    return [
        body('name')
            .notEmpty().withMessage('Name is required.')
            .isString().withMessage('Name must be a string.')
            .isLength({ min: 3 }).withMessage('Name must be at least 3 characters.'),
    ];
}

export const bodyRules = () => {
    return [
        body('email')
            .notEmpty().withMessage('Email is required.')
            .isEmail().withMessage('Email must be a valid email.'),
        body('password')
            .notEmpty().withMessage('Password is required.')
            .isString().withMessage('Password must be a string.')
            .isLength({ min: 6 }).withMessage('Password must be at least 6 characters.')
    ];
}