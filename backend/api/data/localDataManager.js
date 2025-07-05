const fs = require("fs");
const path = require("path");

let products = [];

try {
  const filePath = path.join(__dirname, "../data/products.json");
  const raw = fs.readFileSync(filePath);
  products = JSON.parse(raw);
  console.log("🗃️ JSON yedek verisi yüklendi");
} catch (err) {
  console.error("❌ JSON verisi yüklenemedi:", err.message);
}

module.exports = {
  find(filter = {}) {
    return products.filter(product =>
      Object.entries(filter).every(([key, val]) => product[key] === val)
    );
  },

  add(newProduct) {
    products.push(newProduct);
    return newProduct;
  }
};
