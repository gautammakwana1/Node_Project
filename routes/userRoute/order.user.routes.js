const express = require('express');
const Order = express.Router();
const { createOrder, getOrder, getAllOrder, deleteOrder, getOrderById } = require('../../controllers/user/order.user.controller');
const { userVerifyToken } = require('../../helper/userToken/userVerifytoken');

Order.post('/add-Order',userVerifyToken,createOrder);
Order.get('/get-Order',userVerifyToken,getOrder);
Order.get('/getOrder',userVerifyToken,getOrderById);
Order.get('/get-All-Order',getAllOrder);
Order.delete('/delete-Order',userVerifyToken,deleteOrder);

module.exports = Order;