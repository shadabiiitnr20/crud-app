const express = require("express");
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const {
  getProducts,
  getProductById,
  createProduct,
  updatedProductById,
  deleteProductById,
} = require("../controller/product");

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.put("/:id", updatedProductById);
router.delete("/:id", deleteProductById);

module.exports = router;
