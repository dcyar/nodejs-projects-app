import { DataTypes } from 'sequelize';
import sequelize from "../database/database.js";
import { Project } from "./Project.js";

export const User = sequelize.define('users', {
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
    email: {
        allowNull: false,
        type: DataTypes.STRING
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING
    },
}, {
    timestamps: true,
});

User.hasMany(Project, { foreignKey: 'userId', sourceKey: 'id' });

Project.belongsTo(User, { foreignKey: 'userId', targetKey: 'id' });
