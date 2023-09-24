const Product = require("../models/product");
const asyncHandler = require("express-async-handler");

//Get all products READ
const getProducts = asyncHandler(async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

//Get a Single Product by ID READ
const getProductById = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

//Create a Product CREATE
const createProduct = asyncHandler(async (req, res) => {
  try {
    // console.log(req.body);
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

//Update a Product by ID UPDATE
const updatedProductById = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(req.body);
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!product) {
      res
        .status(404)
        .json({ error: `Cannot find product with give id: ${id}` });
    }
    // const updatedProduct = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

//Delete a Product by ID DELETE
const deleteProductById = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      res.status(404).json({ error: `Cannot find product by given id: ${id}` });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updatedProductById,
  deleteProductById,
};
