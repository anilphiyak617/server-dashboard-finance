import express from "express";
import Transaction from "../models/Transaction.js";

const router = express.Router();

router.get("/transaction", async (req, res) => {
  try {
    const data = await Transaction.find();
    // by default 200
    res.status(200).json(data);

    // console.log("data printed")
  } catch (error) {
    res.status(500).json(error.message);
  }
});

export default router;
