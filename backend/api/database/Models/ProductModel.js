const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Ürün adı zorunludur.'], 
            unique: true, 
            trim: true, 
        },
        popularityScore: {
            type: Number,
            required: [true, 'Popülerlik puanı zorunludur.'],
            min: [0, "Popülerlik puanı 0'dan küçük olamaz."],
            max: [1, "Popülerlik puanı 1'den büyük olamaz (ör: 0.85)."],
        },
        weight: {
            type: Number,
            required: [true, 'Ağırlık zorunludur.'],
            min: [0, "Ağırlık negatif olamaz."],
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
    },
    {
        timestamps: true,
    }
);

class ProductModel extends mongoose.Model {

}

productSchema.loadClass(ProductModel);
module.exports = mongoose.model("products", productSchema);
