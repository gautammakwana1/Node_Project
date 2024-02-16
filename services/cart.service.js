const Cart = require('../models/cart.model');

module.exports = class cartServices {
    async addToCart(body) {
        try {
            return await Cart.create(body);
        } catch (error) {
            console.log(error);
            return res.json({ message: "Server Error from cart services" });
        }
    };

    async getCart(body) {
        try {
            return await Cart.findOne(body);
        } catch (error) {
            console.log(error);
            return res.json({ message: "Server Error from cart services" });
        }
    };

    async getCartById(id) {
        try {
            return await Cart.findById(id);
        } catch (error) {
            console.log(error);
            return res.json({ message: "Server Error from cart services" });
        }
    };

    async getAllCart(body) {
        try {
            let results = await Cart.find(body).populate('cartItem').populate({
                path: 'user',
                model: 'users',
                select: 'firstName lastName email'
            });
            return results;
        } catch (error) {
            console.log(error);
            return res.json({ message: "Server Error from cart services" })
        }
    };

    async updateCart(id, body) {
        try {
            return await Cart.findByIdAndUpdate(id, { $set: body }, { new: true });
        } catch (error) {
            console.log(error);
            return res.json({ message: "Server Error from cart services" })
        }
    };
};
