const mongoose = require("mongoose");
const Item = require("../models/itemModel");

// Get all items
const getAllItems = async (req, res) => {
  try {
    const result = await Item.find().sort({ createdAt: -1 });
    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching all items:", error);
    res.status(500).json({ message: "Error retrieving items" });
  }
};

// Get searched items
const getSearchedItems = async (req, res) => {
  const { q } = req.query;

  try {
    const items = q
      ? await Item.find({ name: { $regex: q, $options: "i" } })
      : [];

    res.status(200).json(items);
  } catch (error) {
    console.error("Error fetching searched items:", error);
    res.status(500).json({ message: "Error retrieving items" });
  }
};

// Get a single item by ID
const getSingleItem = async (req, res) => {
  const { id } = req.params;

  try {
    // Validate ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid item ID" });
    }

    // Fetch the item
    const item = await Item.findById(id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json(item);
  } catch (error) {
    console.error("Error fetching single item:", error);
    res.status(500).json({ message: "Error retrieving item" });
  }
};

module.exports = {
  getAllItems,
  getSearchedItems,
  getSingleItem,
};
