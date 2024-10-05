const express = require('express');
const userRoute = express.Router();
const userController = require('../controllers/userController');
const { getAllUsers, getUser, createUser, updateUser, deleteUser } = userController;
userRoute.route('/')
    .get(getAllUsers)
    .post(createUser);

userRoute.route('/:id')
    .get(getUser)
    .patch(updateUser)
    .delete(deleteUser);

module.exports = userRoute;