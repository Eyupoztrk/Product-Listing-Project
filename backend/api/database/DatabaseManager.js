const mongoose = require("mongoose");
const { CONNECTION_STRING, DB_NAME } = require("../config");
const LocalDataManager = require("../data/localDataManager");
const ProductModel = require("./Models/ProductModel");

let useLocalFallback = false;

async function connect() {
  try {
    if (mongoose.connection.readyState === 1) return;

    await mongoose.connect(CONNECTION_STRING, {
      dbName: DB_NAME,
    });

    console.log("MongoDB connected");
    useLocalFallback = false;
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    console.log("Switching to backup JSON data...");
    useLocalFallback = true;
    console.log("Switched to backup JSON data...");
  }
}

async function find(filter = {}) {
  if (useLocalFallback) {
    return LocalDataManager.find(filter);
  }
  return ProductModel.find(filter);
}

async function add(data) {
  if (useLocalFallback) {
    return LocalDataManager.add(data);
  }
  const product = new ProductModel(data);
  return product.save();
}

module.exports = {
  connect,
  find,
  add,
};