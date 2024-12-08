const mongoose = require('mongoose');
const { Schema } = mongoose;

// Ingredient Schema
const ingredientSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: String,
    required: true
  }
});

// Comment Schema
const commentSchema = new Schema({
  user: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  }
});

// More Details Schema
const moreSchema = new Schema({
  prep_time: {
    type: String,
    required: true
  },
  cooking_time: {
    type: String,
    required: true
  },
  servings: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    required: true
  },
  source: {
    type: String,
    required: true
  }
});

// Instruction Schema
const instructionSchema = new Schema({
  step: {
    type: String,
    required: true
  },
  step_detail: {
    type: String,
    default: "" // Provide a default value to avoid potential null/undefined issues
  }
});

// Main Item Schema
const ItemSchema = new Schema({
  menuId: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  instruction: {
    type: [instructionSchema],
    required: true,
    default: [] // Default empty array for instructions
  },
  tags: {
    type: [String],
    default: [] // Default empty array for tags
  },
  ingredients: {
    type: [ingredientSchema],
    required: true,
    default: [] // Default empty array for ingredients
  },
  comments: {
    type: [commentSchema],
    default: [] // Default empty array for comments
  },
  more: {
    type: moreSchema,
    required: true
  }
});

// Create Model
const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;
