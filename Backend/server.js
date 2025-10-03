const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Sample products
const products = [
  { id: 1, name: "Shampoo", price: 120, category: "Personal Care" },
  { id: 2, name: "Rice 5kg", price: 350, category: "Groceries" },
  { id: 3, name: "T-Shirt", price: 499, category: "Clothing" },
  { id: 4, name: "Headphones", price: 1299, category: "Electronics" },
];

app.get("/products", (req, res) => {
  res.json(products);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
