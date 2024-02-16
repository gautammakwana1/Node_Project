const express = require('express');
const Favorite = express.Router();
const { upload } = require('../../helper/imageUpload');
const { addToFavorite, getAllFavorite, deleteFavorite } = require('../../controllers/user/favorite.user.controller');
const { userVerifyToken } = require('../../helper/userToken/userVerifytoken');

Favorite.post('/add-Favorite',upload.none(),userVerifyToken,addToFavorite);
Favorite.get('/get-Favorite',userVerifyToken,getAllFavorite);
Favorite.delete('/delete-Favorite',upload.none(),userVerifyToken,deleteFavorite);

module.exports = Favorite;