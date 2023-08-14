import mongoose, { Schema, Types, model } from "mongoose";
import { loadType } from "mongoose-currency";
// adding the currency type into mongoose.types
loadType(mongoose);

const daySchema = new Schema(
  {
    date: String,
    revenue: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    expenses: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const monthSchema = new Schema(
  {
    month: String,
    revenue: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    expenses: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    operationalExpenses: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    nonOperationalExpenses: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
  },
  {
    // configuration for making getters run when converting document to JSON
    // by defaul getters are not run
    toJSON: {
      getters: true,
    },
  }
);

const kpiSchema = new Schema(
  {
    // Define your schema fields here
    totalProfit: {
      type: Types.Currency,
      currency: "INR",
      get: (v) => v / 100,
    },
    totalRevenue: {
      type: Types.Currency,
      currency: "INR",
      get: (v) => v / 100,
    },
    totalExpenses: {
      type: Types.Currency,
      currency: "INR",
      get: (v) => v / 100,
    },
    expensesByCategory: {
      type: Map,
      of: {
        type: Types.Currency,
        currency: "INR",
        get: (v) => v / 100,
      },
    },
    dailyData: [daySchema],
    monthlyData: [monthSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);
// creating KPI model i.e class which is mapped KPI collection
const KPI = model("KPI", kpiSchema);

export default KPI;
