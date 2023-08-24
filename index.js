import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import kpiRoutes from "./routes/kpiRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";
import KPI from "./models/KPI.js";
import { kpis_data, products_data, transactions_data } from "./data/data.js";
import Transaction from "./models/Transaction.js";
import Product from "./models/Product.js";

/* CONFIGURATIONS */
// reads .env file and setups the environtment variables in the process.env object
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(
  helmet.crossOriginResourcePolicy({
    policy: "cross-origin",
  })
);
// used for logging Request logs
app.use(morgan("common"));
// for cross origin resource sharing i.e accessing from any other system
app.use(cors());

/* ROUTES */
app.get("/", (req, res) => res.json("This is the Base route"));
app.use("/kpi", kpiRoutes);
app.use("/product", productRoutes);
app.use("/transactions", transactionRoutes);

/* MONGOOSE */
const PORT = process.env.PORT;

// Immediately Invoked Function
(async () => {
  try {
    // connecting to the mongodb-database
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Seeding data to the mongoDB one time only
    // await mongoose.connection.dropDatabase();
    // KPI.insertMany(kpis_data);
    // Product.insertMany(products_data);
    // Transaction.insertMany(transactions_data);
    // console.log("Data Base seeded sucesfully");

    // app is listening for incoming request at the given port
    app.listen(PORT, () => console.log(`Server is listening in PORT: ${PORT}`));
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
})();
