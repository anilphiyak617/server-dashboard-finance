import express from "express";
import KPI from "../models/KPI.js";

const router = express.Router();

router.get("/kpis", async (req, res) => {
  try {
    const data = await KPI.find();
    console.log(data);
    res.json();
  } catch (error) {
    res.status(404).json("error in the server ");
  }
});

export default router;
