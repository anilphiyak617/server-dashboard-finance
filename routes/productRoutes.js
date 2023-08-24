import express from "express";
import Product from "../models/Transaction.js";

const router = express.Router();

router.get("/products", async (req, res) => {
  try {
    const data = await Product.find();
    res.json(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

export default router;
