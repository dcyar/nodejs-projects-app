import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/User.js";
import HttpError from "../utils/httpError.js";

export const register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });

        if (user) {
            throw new HttpError('User with this email already exists.', 400);
        }

        const newUser = await User.create({
            name,
            email,
            password: await bcrypt.hash(password, 10),
        });

        res.status(201).json({
            message: 'User created successfully.',
        })
    } catch (error) {
        res.status(error.code || 500).json({
            message: error.message || 'An error occurred while creating the user.'
        });
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });

        if (!user) {
            throw new HttpError('Invalid credentials.', 401);
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            throw new HttpError('Invalid credentials.', 401);
        }

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({
            message: 'Logged in successfully.',
            token,
        });
    } catch (error) {
        res.status(error.code || 500).json({
            message: error.message || 'An error occurred while logging in.'
        });
    }
}