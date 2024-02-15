const express = require('express');
const Admin = express.Router();
const { upload } = require('../../helper/imageUpload');
const { adminVerifyToken } = require('../../helper/adminToken/adminVerifytoken');
const { registerAdmin, getAllAdmin, logInAdmin, updateAdmin, deleteAdmin, updatePassword, getAdmin } = require('../../controllers/admin/admin.controller');

Admin.post('/registerAdmin', upload.single('profileImage'), registerAdmin);
Admin.get('/getAllAdmin', getAllAdmin);
Admin.get('/getAdmin', adminVerifyToken, getAdmin);
Admin.get('/log-In_Admin', logInAdmin);
Admin.put('/updateAdmin', adminVerifyToken,upload.single('profileImage'), updateAdmin);
Admin.put('/updateAdminPass', adminVerifyToken, updatePassword);
Admin.delete('/deleteAdmin', adminVerifyToken, deleteAdmin);

module.exports = Admin;