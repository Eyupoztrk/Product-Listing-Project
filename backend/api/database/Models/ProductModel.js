const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Product name is required'], 
            unique: true, 
            trim: true, 
        },
        popularityScore: {
            type: Number,
            required: [true, 'Popularity score is required'],
            min: [0, "The popularity score cannot be less than 0"],
            max: [1, "The popularity score cannot be greater than 1 (e.g. 0.85)"],
        },
        weight: {
            type: Number,
            required: [true, 'Weight is required'],
            min: [0, "Weight cannot be negative"],
        },
        images: {
            yellow: {
                type: String,
                required: true,
            },
            rose: {
                type: String,
                required: true,
            },
            white: {
                type: String,
                required: true,
            },
        },
        price: {type: Number}
    },
    {
        timestamps: true,
    }
);

class ProductModel extends mongoose.Model {

}

productSchema.loadClass(ProductModel);
module.exports = mongoose.model("products", productSchema);
