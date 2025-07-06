const { getGoldPriceUSDPerGram } = require("../services/goldPrice");
const DatabaseManager = require("../database/DatabaseManager");


exports.getAllProductsWithCalculatedPrice = async (queryParams = {}) => {
  const { minPrice, maxPrice, minPopularity } = queryParams;

  const goldPrice = await getGoldPriceUSDPerGram();
  const productsFromDB = await DatabaseManager.find({});

  let productsWithPrice = productsFromDB.map(product => {
    const calculatedPrice = (product.popularityScore + 1) * product.weight * goldPrice;
    const productObject = product.toObject();
    productObject.price = parseFloat(calculatedPrice.toFixed(2));
    return productObject;
  });
  
  if (minPrice) {
    productsWithPrice = productsWithPrice.filter(product => product.price >= parseFloat(minPrice));
  }
  if (maxPrice) {
    productsWithPrice = productsWithPrice.filter(product => product.price <= parseFloat(maxPrice));
  }

  if (minPopularity) {
    productsWithPrice = productsWithPrice.filter(product => product.popularityScore >= parseFloat(minPopularity));
  }

  return productsWithPrice;
};