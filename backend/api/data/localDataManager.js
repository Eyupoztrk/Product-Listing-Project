const fs = require("fs");
const path = require("path");

let products = [];

const filePath = path.join(__dirname, "../data/products.json");

try {
  const raw = fs.readFileSync(filePath);
  products = JSON.parse(raw);
  console.log("JSON backup data loaded");
} catch (err) {
  console.error("Failed to load JSON data:", err.message);
}

function saveToFile() {
  try {
    fs.writeFileSync(filePath, JSON.stringify(products, null, 2));
  } catch (err) {
    console.error("Failed to save JSON data:", err.message);
  }
}

module.exports = {
  find(filter = {}) {
    return products.filter(product =>
      Object.entries(filter).every(([key, val]) => product[key] === val)
    );
  },

  add(newProduct) {
    const index = products.findIndex(p => p.name === newProduct.name);

    if (index !== -1) {
      products[index] = { ...products[index], ...newProduct };
    } else {
      
      products.push(newProduct);
    }

    saveToFile(); 
    return newProduct;
  }
};
