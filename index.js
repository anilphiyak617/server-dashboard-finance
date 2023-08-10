import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";

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

app.use(morgan("common"));
app.use(cors);
/* MONGOOSE */
const PORT = process.env.PORT;
async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.listen(PORT, () => console.log(`Server is listening in PORT: ${PORT}`));
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
}

main();
