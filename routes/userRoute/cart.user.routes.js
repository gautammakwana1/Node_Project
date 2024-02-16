const express = require('express');
const Cart = express.Router();
const { userVerifyToken } = require('../../helper/userToken/userVerifytoken');
const { addToCart, getCart, updateCart, deleteCart } = require('../../controllers/user/cart.user.controller');

Cart.post('/add-Cart',userVerifyToken,addToCart);
Cart.get('/get-Cart',userVerifyToken,getCart);
Cart.put('/update-Cart',userVerifyToken,updateCart);
Cart.delete('/delete-Cart',userVerifyToken,deleteCart);

module.exports = Cart;