const express = require("express");
const router = express.Router();
const productController = require("../controller/Product");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../controller/verifyToken");

//ADD PRODUCT
router.post(
  "/",
  verifyTokenAndAdmin,

  productController.addProduct
);
//UPDATE
router.put("/:id", verifyTokenAndAdmin, productController.updateProduct);
//DELETE
router.delete("/:id", verifyTokenAndAdmin, productController.deleteProduct);
//GET PRODUCT
router.get("/find/:id", productController.getProduct);
//GET ALL PRODUCTS
router.get("/", productController.getProducts);

module.exports = router;
