const db = require ('../utils/database');
const { DataTypes }= require("sequelize");

const Tasks = db.define('tasks', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    },
    isComplete: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        field:"is_complete"
    },
    userId: {
        type:DataTypes.INTEGER,
        allowNull:false,
        references: {
            key: "id",
            model: "users",
        },
        field: "user_id",
    },
    createdAt: {
        type: DataTypes.DATE,
        field: "created_at",
        allowNull: false,
    },
    updatedAt: {
        type: DataTypes.DATE,
        field: "updated_at",
        allowNull: false,
    },
});

module.exports = Tasks;