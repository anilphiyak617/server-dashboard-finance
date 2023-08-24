import express from "express";
import KPI from "../models/KPI.js";

const router = express.Router();

router.get("/kpis", async (req, res) => {
  try {
    const data = await KPI.find();
    res.json(data);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

export default router;
