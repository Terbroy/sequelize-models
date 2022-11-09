const db = require ('../utils/database');
const { DataTypes }= require("sequelize");

const TaskCategories = db.define('tasks_categories', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    categoryId: {
        type:DataTypes.INTEGER,
        allowNull:false,
        references: {
            key: "id",
            model: "categories",
        },
        field: "category_id",
    },
    categoryId: {
        type:DataTypes.INTEGER,
        allowNull:false,
        references: {
            key: "id",
            model: "tasks",
        },
        field: "tasks_id",
    }
},{
    timestamps:false,
});

module.exports = TaskCategories;