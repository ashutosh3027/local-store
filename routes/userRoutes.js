const express = require('express');
const router = express.Router();

const authController = require('./.././controller/authController');
// const {getAllusers, createNewUser, getUserById, updateUser, deleteUser} = require('./.././controller/userController');

// router.post('/login', authController.login);
router.post('/register', authController.register);


// router.route('/').get(getAllusers).post(createNewUser);
// router.route('/:id').get(getUserById).patch(updateUser).delete(deleteUser);

module.exports=router;