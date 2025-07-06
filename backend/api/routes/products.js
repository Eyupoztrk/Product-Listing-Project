var express = require('express');
var router = express.Router();
const ProductModel = require("../database/Models/ProductModel")
const Response = require("../lib/Response");
const Enum = require("../config/Enum");
const CustomError = require("../lib/Error");
const { getGoldPriceUSDPerGram } = require("../services/goldPrice");
const DatabaseManager = require("../database/DatabaseManager");
const productController = require('../controller/productController');


router.get("/", async (req, res) => {
    try {
        const products = await productController.getAllProductsWithCalculatedPrice(req.query);
        res.json(Response.successResponse(products, Enum.HTTP_CODES.ACCEPTED));
    }
    catch (err) {
        res.json(Response.errorResponse(err, Enum.HTTP_CODES.BAD_REQUEST));
    }
});


router.post("/add", async (req, res) => {
    try {
        let body = req.body;

        if (!body.name)
            throw new CustomError(Enum.HTTP_CODES.BAD_REQUEST, Enum.RESPONSE_MESSAGES.BAD_REQUEST, "Name field is required");

        const price = (body.popularityScore + 1) * body.weight * await getGoldPriceUSDPerGram();

        let product = new ProductModel({
            name: body.name,
            popularityScore: body.popularityScore,
            weight: body.weight,
            images: body.images,
            price: price
        });

        const added = await DatabaseManager.add(product);
        res.json(Response.successResponse(added, Enum.RESPONSE_MESSAGES.CREATED));

    }
    catch (err) {
        res.json(Response.errorResponse(err, Enum.HTTP_CODES.BAD_REQUEST))

    }

});



module.exports = router;
