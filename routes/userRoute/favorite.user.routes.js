const express = require('express');
const Favorite = express.Router();
const { upload } = require('../../helper/imageUpload');
const { addToFavorite } = require('../../controllers/Favorite/favorite.controller');
const { userVerifyToken } = require('../../helper/userToken/userVerifytoken');

Favorite.post('/add-Favorite',upload.none(),userVerifyToken,addToFavorite);

module.exports = Favorite;