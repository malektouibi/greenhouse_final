const mongoose = require("mongoose");

const plantSchema = mongoose.Schema(
  {
    areaId: { String },
    name: { String },
    quantity: { Number },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Plant", plantSchema, "plant");
