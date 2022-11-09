const Address = require("./addresses.models");
const Categories = require("./categories.models");
const Tasks = require("./tasks.models");
const TaskCategories = require("./taskscategories.models");
const Users =  require("./users.models");

const initModels = () => {
    Users.hasOne(Address,{as: 'home', foreignKey: 'user_id'});
    Address.belongsTo(Users, {as: 'user', foreignKey: 'user_id'});
    Users.hasMany(Tasks, {as: 'todo', foreignKey: 'user_id'});
    Tasks.belongsTo(Users, {as: 'author', foreignKey: 'user_id'});
    // Tasks.belongsToMany(Categories, {through: "tasks_categories"});
    // Categories.belongsToMany(Tasks, {through: "tasks_categories"})
    Tasks.hasMany(TaskCategories, {as: 'categories', foreignKey: 'tasks_id'});
    TaskCategories.belongsTo(Tasks, {as: 'todos', foreignKey: 'tasks_id'});
    Categories.hasMany(TaskCategories, {as: 'todos', foreignKey: 'category_id'});
    TaskCategories.belongsTo(Categories, {as: 'categories', foreignKey: 'category_id'});
};

module.exports = initModels; 