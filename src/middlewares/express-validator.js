import { validationResult } from "express-validator";

const validatorRules = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const formattedErrors = errors.array().map(error => {
            return { [error.path]: error.msg };
        });

        return res.status(422).json({ errors: formattedErrors});
    }

    next();
}

export default validatorRules;