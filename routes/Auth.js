const express = require("express");
const router = express.Router();
const authController = require("../controller/Auth");
//GET ALL PRODUCTS
router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/loginadmin", authController.loginAdmin);
module.exports = router;
