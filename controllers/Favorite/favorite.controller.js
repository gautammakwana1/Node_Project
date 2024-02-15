const FavoriteServices = require('../../services/favorite.service');
const favoriteService = new FavoriteServices();

exports.addToFavorite = async (req, res) => {
    try {
        // console.log("Favorite Item is => ",req.body.favoriteItem);
        let Favorite = await favoriteService.getFavorite({ favoriteItem: req.body.favoriteItem ,user: req.user._id ,isDelete : false});
        // console.log(Favorite);
        if (Favorite) {
            return res.json({ message: "Product already added to the Favorites" });
        };
        Favorite = await favoriteService.addToFavorite({
            ...req.body,user: req.user._id
        });
        return res.json({Favorite,message: "Product added to favorite succesfully"});
    } catch (error) {
        console.log(error);
        return res.json({ message: "Server Error from favorites controller" });
    }
};

exports.getAllFavorite = async (req,res)=>{
    try {
        let Favorite = await favoriteService.getAllFavorites({isDelete: false});
        if (!Favorite) {
            return res.json({message: "Favorite Product is not found"});
        };
        
    } catch (error) {
        console.log(error);
        return res.json({message: "Server Error from favorite controller"});
    }
}