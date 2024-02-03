import { DataTypes } from 'sequelize';
import sequelize from '../database/database.js';

export const Task = sequelize.define('tasks', {
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    title: {
        allowNull: false,
        type: DataTypes.STRING
    },
    priority: {
        defaultValue: 1,
        type: DataTypes.INTEGER
    },
    completed: {
        defaultValue: false,
        type: DataTypes.BOOLEAN
    },
}, {
    timestamps: true,
});
