const mongoose = require("mongoose");

const greenhouseSchema = mongoose.Schema(
  {
    name: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Greenhouse", greenhouseSchema, "greenhouse");
