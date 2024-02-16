const express = require('express');
const cartAdmin = express.Router();
const {} = require('../../helper/adminToken/adminVerifytoken');
const { getAllCart } = require('../../controllers/admin/cart.admin.controller');

cartAdmin.get('/get-Cart',getAllCart);

module.exports = cartAdmin;