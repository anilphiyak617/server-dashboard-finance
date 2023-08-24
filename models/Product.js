import mongoose from "mongoose";
import { model } from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
// loading mongooes-currenc type into mongoose.Types
loadType(mongoose);

const ProductSchema = new Schema(
  {
    price: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    expense: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    transactions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        // ref: "Transaction",
      },
    ],
  },
  { timestamps: true, toJSON: { getters: true } }
);

const Product = model("Product", ProductSchema);

export default Product;
