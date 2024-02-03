import { Project } from '../models/Project.js';
import HttpError from '../utils/httpError.js';

export const getAll = async (req, res) => {
    try {
        const projects = await Project.findAll();

        res.json(projects);
    } catch (error) {
        res.status(error.code || 500).json({
            message: error.message || 'Internal server error',
        });   
    }
};

export const create = async (req, res) => {
    const { name, description } = req.body;
    
    try {
        const project = await Project.create({
            name,
            description,
        });

        res.status(201).json(project);
    } catch (error) {
        res.status(error.code || 500).json({
            message: error.message || 'Internal server error',
        });
    }
}

export const getById = async (req, res) => {
    const { id } = req.params;

    try {
        const project = await Project.findByPk(id);

        if (!project) {
            throw new HttpError(`Project with id ${id} not found`, 404);
        }

        res.json(project);
    } catch (error) {
        res.status(error.code || 500).json({
            message: error.message || 'Internal server error',
        });
    }
}

export const update = async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;

    try {
        const project = await Project.findByPk(id);

        if (!project) {
            throw new HttpError(`Project with id ${id} not found`, 404);
        }

        project.name = name;
        project.description = description;

        await project.save();

        res.json(project);
    } catch (error) {
        res.status(error.code || 500).json({
            message: error.message || 'Internal server error',
        });
    }
}

export const destroy = async (req, res) => {
    const { id } = req.params;

    try {
        const project = await Project.findByPk(id);

        if (!project) {
            throw new HttpError(`Project with id ${id} not found`, 404);
        }

        await project.destroy();

        res.sendStatus(204);
    } catch (error) {
        res.status(error.code || 500).json({
            message: error.message || 'Internal server error',
        });
    }
}

export const getTasksByProjectId = async (req, res) => {
    const { id } = req.params;

    try {
        const project = await Project.findByPk(id, {
            include: 'tasks',
        });

        if (!project) {
            throw new HttpError(`Project with id ${id} not found`, 404);
        }

        res.json(project);
    } catch (error) {
        res.status(error.code || 500).json({
            message: error.message || 'Internal server error',
        });
    }
}