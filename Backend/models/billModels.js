const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const billSchema = mongoose.Schema(
  {
    // basic customer details
    customerName: {
      type: String,
      required: true,
    },
    customerEmail: {
      type: String,
      required: false,
    },
    customerAge: {
      type: Number,
      required: false,
    },

    // bill content details array of items TODO
    itemName: {
      type: String,
      required: true,
    },
    itemPrice: {
      type: Number,
      required: true,
    },
    itemQuantity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const newBill = mongoose.model("newBill", billSchema);

module.exports = newBill;
