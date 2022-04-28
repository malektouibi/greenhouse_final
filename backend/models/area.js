const mongoose = require("mongoose");

const areaSchema = mongoose.Schema(
  {
    greenhouseId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Area", areaSchema, "area");
