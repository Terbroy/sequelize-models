const Address = require("../models/addresses.models");
const Categories = require("../models/categories.models");
const Tasks = require("../models/tasks.models");
const TaskCategories = require("../models/taskscategories.models");
const Users = require("../models/users.models");


class UserSevices {
    static async getAll() {
        try{
            const result = await Users.findAll({attributes: [ 'id', 'username', 'email' ]});
            return result;
        }catch (error){
            throw(error);
        }
    }
    static async getById(id) {
        try{
            const result = await Users.findByPk(id, {attributes: [ 'id', 'username', 'email' ]});
            console.log(result);
            return result;
        }catch (error){
            throw(error);
        }
    }
    static async getUserJoinAddress(id) {
        try{
            const result = await Users.findOne({
                where: { id },
                attributes: [ 'username', 'email' ],
                include: {
                    model: Address,
                    as: 'home',
                    attributes: [ 'street', 'number']
                }
            });
            return result;
        }catch (error){
            throw(error);
        }
    }
    static async getUserJoinTasks(id) {
        try{
            const result = await Users.findOne({
                where: { id },
                attributes: [ 'username', 'email' ],
                include: {
                    model: Tasks,
                    as: 'todo',
                    attributes: [ 'title', 'description', 'isComplete'],
                    include: {
                        model: TaskCategories,
                        as: 'categories',
                        attributes: [ 'categoryId'],
                        include: {
                            model: Categories,
                            as: 'categories',
                            attributes: [ 'name']
                        }
                    },
                }
            });
            return result;
        }catch (error){
            throw(error);
        }
    }
}


module.exports = UserSevices;