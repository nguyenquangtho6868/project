const express = require("express");
const router = express.Router();
const cartController = require("../controller/Cart");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../controller/verifyToken");
//CREATE
router.post("/", cartController.addCart);
//UPDATE
router.put("/:id", cartController.updateCart);
//DELETE
router.delete("/:id", cartController.deleteCart);
//GET
router.get("/find/:userId", cartController.getCart);
//GET ALL
router.get("/", cartController.getCarts);

module.exports = router;
