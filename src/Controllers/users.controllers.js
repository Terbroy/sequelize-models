const UserSevices = require("../Services/users.services");



const getAllUsers = async (req, res) => {
    try {
        const result = await UserSevices.getAll();
        res.status(200).json(result)
        
    } catch (error) {
        console.log(error);
    }

}
const getUserById = async (req, res) => {
    try {
        const {id}= req.params;
        const result = await UserSevices.getById(id);
        res.status(200).json(result);
        
    } catch (error) {
        console.log(error);
    }

}
const getUserWhitAddress = async (req, res) => {
    try {
        const {id}= req.params;
        const result = await UserSevices.getUserJoinAddress(id);
        res.status(200).json(result);
        
    } catch (error) {
        console.log(error);
    }

}
const getUserWhitTasks = async (req, res) => {
    try {
        const {id}= req.params;
        const result = await UserSevices.getUserJoinTasks(id);
        res.status(200).json(result);
        
    } catch (error) {
        console.log(error);
    }

}

module.exports = {
    getAllUsers,
    getUserById,
    getUserWhitAddress,
    getUserWhitTasks
};