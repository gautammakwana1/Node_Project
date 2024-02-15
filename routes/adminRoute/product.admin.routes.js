const express = require('express');
const adminProduct = express.Router();
const { upload } = require('../../helper/adminToken/productImageUploade');
const { addProduct, getAllProduct, getSpeProduct, updateProduct, deleteProduct } = require('../../controllers/admin/product.admin.controller');

adminProduct.post('/addNewProduct',upload.single('productImage'),addProduct);
adminProduct.get('/getAllProduct',getAllProduct);
adminProduct.get('/getProduct',getSpeProduct);
adminProduct.put('/updateProduct',upload.single('productImage'),updateProduct);
adminProduct.delete('/deleteProduct',deleteProduct);

module.exports = adminProduct;