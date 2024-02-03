import { DataTypes } from 'sequelize';
import sequelize from '../database/database.js';
import { Task } from './Task.js';

export const Project = sequelize.define('projects', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    description: {
        allowNull: true,
        type: DataTypes.STRING
    },
}, {
    timestamps: true,
});

Project.hasMany(Task, { foreignKey: 'projectId', sourceKey: 'id' });

Task.belongsTo(Project, { foreignKey: 'projectId', targetKey: 'id' });