const express = require("express");
const userController = require("../controller/user");

const router = express.Router();

router
  .post("/", userController.createProduct)
  .get("/", userController.getAllProducts)
  .get("/:id", userController.getOneProduct)
  .put("/:id", userController.replaceProduct)
  .patch("/:id", userController.updateProduct)
  .delete("/:id", userController.deleteProduct);

exports.router = router;
