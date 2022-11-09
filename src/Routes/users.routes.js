const { Router } = require("express");
const { getAllUsers, getUserById, getUserWhitAddress, getUserWhitTasks } = require("../Controllers/users.controllers");

const router = Router();

router.get("/users", getAllUsers);
router.get("/userS/:id", getUserById);
router.get("/userS/:id/address", getUserWhitAddress);
router.get("/userS/:id/tasks", getUserWhitTasks);

module.exports= router;