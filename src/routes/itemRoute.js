const express = require('express');
const router = express.Router();
const ItemController = require("../controllers/itemController")

router.get("/all-items", ItemController.getAllItems);
router.get("/items", ItemController.getSearchedItems);
router.get("/items/:id", ItemController.getSingleItem);
router.get("/featured-recipe/:id", ItemController.getSingleItem)

module.exports = router