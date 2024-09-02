const express = require("express");
const app = express();
const port = 3500;

app.use(express.json());

require("./db/conn");

const FoodItem = require("./model/schema");

app.get("/", (req, res) => {
  res.send("<h1>Welcome to week-6-task</h1>");
});

app.post("/api/foods", async (req, res) => {
  try {
    const food = await FoodItem.create(req.body);
    res.status(201).json({ food });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

// Get all food items
app.get("/api/foods", async (req, res) => {
  try {
    const foods = await FoodItem.find();
    res.send(foods);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// Get a food item by ID
app.get("/api/foods/:id", async (req, res) => {
  try {
    const food = await FoodItem.findById(req.params.id);
    if (!food) return res.status(404).send({ error: "Food item not found" });
    res.send(food);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// Update a food item
app.put("/api/foods/:id", async (req, res) => {
  try {
    const food = await FoodItem.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!food) return res.status(404).send({ error: "Food item not found" });
    res.send(food);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

// Delete a food item
app.delete("/api/foods/:id", async (req, res) => {
  try {
    const food = await FoodItem.findByIdAndDelete(req.params.id);
    if (!food) return res.status(404).send({ error: "Food item not found" });
    res.send({ message: "Food item deleted successfully" });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// http://localhost:3500/api/foods fetch(api)

app.listen(port, (req, res) => {
  console.log(`server listening at port ${port}`);
});
