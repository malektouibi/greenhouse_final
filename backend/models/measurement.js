const mongoose = require("mongoose");

const measurementSchema = mongoose.Schema(
  {
    areaId: {
      type: String,
      required: true,
    },
    data: {
      light_intensity: Number,
      relative_humidity: Number,
      temperature: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Measurement",
  measurementSchema,
  "measurement"
);
