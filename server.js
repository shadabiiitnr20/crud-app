const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Get all products READ
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: "Bad Request" });
  }
});

//Get a Single Product by ID READ
app.get("/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: "Bad Request" });
  }
});

//Create a Product CREATE
app.post("/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: "Bad Request" });
  }
});

//Update a Product by ID UPDATE
app.put("/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
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
    res.status(400).json({ error: "Bad Request" });
  }
});

//Delete a Product by ID DELETE
app.delete("/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      res.status(404).json({ error: `Cannot find product by given id: ${id}` });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: "Bad Request" });
  }
});

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
  console.log("DB connected");
  app.listen(PORT, () => {
    console.log(`App is running on port: ${PORT}`);
  });
}
