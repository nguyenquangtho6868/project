const express = require("express");
const router = express.Router();
const orderController = require("../controller/Order");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../controller/verifyToken");
//CREATE
router.post("/", verifyToken, orderController.addOrder);
//UPDATE
router.put("/:id", verifyTokenAndAdmin, orderController.updateOrder);
//DELETE
router.delete("/:id", verifyTokenAndAdmin, orderController.deleteOrder);
//GET
router.get(
  "/find/:userId",
  verifyTokenAndAuthorization,
  orderController.getOrder
);
//GET ALL
router.get("/", verifyTokenAndAdmin, orderController.getOrders);
//GET INCOME
router.get("/income", verifyTokenAndAdmin, orderController.getIncome);

module.exports = router;
