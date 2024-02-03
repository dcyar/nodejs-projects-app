import { Task } from '../models/Task.js';
import HttpError from '../utils/httpError.js';

export const getAll = async (req, res) => {
    try {
        const tasks = await Task.findAll();

        res.json(tasks);
    } catch (error) {
        res.status(error.code || 500).json({
            message: error.message || 'Internal server error',
        });   
    }
};

export const create = async (req, res) => {
    const { title, priority, completed = 0, projectId } = req.body;
    
    try {
        const task = await Task.create({
            title,
            priority,
            completed,
            projectId,
        });

        res.status(201).json(task);
    } catch (error) {
        res.status(error.code || 500).json({
            message: error.message || 'Internal server error',
        });
    }
}

export const getById = async (req, res) => {
    const { id } = req.params;

    try {
        const task = await Task.findByPk(id);

        if (!task) {
            throw new HttpError(`Task with id ${id} not found`, 404);
        }

        res.json(task);
    } catch (error) {
        res.status(error.code || 500).json({
            message: error.message || 'Internal server error',
        });
    }
}

export const update = async (req, res) => {
    const { id } = req.params;
    const { title, priority, completed } = req.body;

    try {
        const task = await Task.findByPk(id);

        if (!task) {
            throw new HttpError(`Task with id ${id} not found`, 404);
        }

        task.name = title;
        task.priority = priority;
        task.completed = completed;

        await task.save();

        res.json(task);
    } catch (error) {
        res.status(error.code || 500).json({
            message: error.message || 'Internal server error',
        });
    }
}

export const destroy = async (req, res) => {
    const { id } = req.params;

    try {
        const task = await Task.findByPk(id);

        if (!task) {
            throw new HttpError(`Task with id ${id} not found`, 404);
        }

        await task.destroy();

        res.sendStatus(204);
    } catch (error) {
        res.status(error.code || 500).json({
            message: error.message || 'Internal server error',
        });
    }
}