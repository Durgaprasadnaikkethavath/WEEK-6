const mongoose = require("mongoose");

const createSchema = new mongoose.Schema({
  name: { type: String, required: true },
  foodGroup: { type: String, required: true },
  description: String,
  nutritionalInfo: {
    calories: Number,
    protein: Number,
    fat: Number,
    carbs: Number,
    sugar: Number,
  },
  servingSize: String,
  allergens: [String],
  ingredients: [String],
  preparationMethods: [String],
  certifications: [String],
  countryOfOrigin: String,
  brand: String,
  dietaryRestrictions: [String],
  healthBenefits: [String],
  bestPractices: String,
});

const createRecordsFood = new mongoose.model("createRecordsFood", createSchema);

module.exports = createRecordsFood;
