const express = require('express');
const User = express.Router();
const { upload } = require('../../helper/imageUpload');
const { registerUser, getAllUser, getUser, logInUser, updateUser, updatePassword, deleteUser } = require('../../controllers/user/user.controller');
const { userVerifyToken } = require('../../helper/userToken/userVerifytoken');

User.post('/registerUser',upload.single('profileImage'),registerUser);
User.get('/getAllUser',upload.none(),getAllUser);
User.get('/logInUser',logInUser);
User.get('/getUser',userVerifyToken,getUser);
User.put('/updateUser',userVerifyToken,upload.single('profileImage'),updateUser);
User.put('/updateUserPass',userVerifyToken,updatePassword);
User.delete('/deleteUser',userVerifyToken,deleteUser);

module.exports = User;