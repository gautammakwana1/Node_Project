const Product = require('../models/product.model');

module.exports = class productServices {
    async addNewProduct(body) {
        try {
            return await Product.create(body);
        } catch (error) {
            console.log(error);
            return res.json({ message: "Server Error from product services" });
        }
    };

    async getProduct(body){
        try {
            return await Product.findOne({body});
        } catch (error) {
            console.log(error);
            return res.json({message: "Server Error from product services"});
        }
    }

    async getAllProduct(query) {
        try {
            let condition = ({isDelete : false})
            return await Product.find({...condition}).select({
                productName: 1,
                productPrice:1,
                productImage:1
            });
        } catch (error) {
            console.log(error);
            return res.json({ message: "Server Error from product services" });
        }
    };

    async getProductById(id) {
        try {
            return await Product.findById(id);
        } catch (error) {
            console.log(error);
            return res.json({ message: "Server Error from product services" });
        }
    };

    async updateProduct(id, body) {
        try {
            return await Product.findByIdAndUpdate(id, { $set: body });
        } catch (error) {
            console.log(error);
            return res.json({ message: "Server Error from product services" });
        }
    };
};
