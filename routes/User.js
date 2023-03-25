const express = require("express");
const router = express.Router();
const userController = require("../controller/User");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../controller/verifyToken");

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, userController.updateUser);
//DELETE
router.delete("/:id", verifyTokenAndAuthorization, userController.deleteUser);
//GET
router.get("/find/:id", verifyTokenAndAdmin, userController.getUser);
//GET ALL
router.get("/", verifyTokenAndAdmin, userController.getUsers);
//GET STATS
router.get("/stats", verifyToken, userController.getStarsUser);

module.exports = router;
