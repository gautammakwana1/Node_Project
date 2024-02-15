const Favorites = require('../models/favorite.model');

module.exports = class FavoriteServices {
    async addToFavorite(body) {
        try {
            return await Favorites.create(body);
        } catch (error) {
            console.log(error);
            return res.json({ message: "Server Error from Favorites Services" });
        }
    };

    async getFavorite(body){
        try {
            return await Favorites.findOne(body);
        } catch (error) {
            console.log(error);
            return res.json({message: "Server Error from Favorites Services"});
        }
    };

    async getFavoriteById(id){
        try {
            return await Favorites.findById(id);
        } catch (error) {
            console.log(error);
            return res.json({message: "Server Error from Favorites Services"});
        }
    };

    async getAllFavorites(body) {
        try {
            return await Favorites.find(body);
        } catch (error) {
            console.log(error);
            return res.json({ message: "Server Error from Favorites Services" });
        }
    };

    async updateFavorite(id, body) {
        try {
            return await Favorites.findByIdAndUpdate(id, { $set: body }, { new: true });
        } catch (error) {
            console.log(error);
            return res.json({ message: "Server Error from Favorites Services" });
        }
    };
};
