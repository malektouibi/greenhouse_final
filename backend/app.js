const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const Greenhouse = require("./models/greenhouse");
const Area = require("./models/area");
const Plant = require("./models/plant");
const Meas = require("./models/measurement");

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to database"));

// Routes
const router = express.Router();

app.use(cors());
app.use("/api", router);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log("Yes this works!");
  res.json({ message: "Homepage" });
});

// CRUD: Greenhouse data
// Getting all data
app.get("/api/greenhouse", async (req, res) => {
  try {
    const greenhouseData = await Greenhouse.find();
    console.log(greenhouseData);
    res.status(200).json(greenhouseData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Creating a new data entry
app.post("/api/greenhouse/add", async (req, res) => {
  const newEntry = new Greenhouse({
    name: req.body.name,
  });

  try {
    const savedGrn = await newEntry.save();
    res.status(201).json({ Greenhouse: savedGrn });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Getting entry by id
app.get("/api/greenhouse/:greenhouse_id", async (req, res) => {
  try {
    const greenhouseEntry = await Greenhouse.findOne({
      _id: req.params.greenhouse_id,
    });
    console.log(greenhouseEntry);
    res.status(200).json(greenhouseEntry);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Updating entry by id
app.patch("/api/greenhouse/add/:greenhouse_id", async (req, res) => {
  try {
    const updated_GrnEntry = await Greenhouse.updateOne(
      { _id: req.params.greenhouse_id },
      {
        $set: {
          name: req.body.name,
        },
      }
    );

    console.log(updated_GrnEntry);
    res.status(200).json(updated_GrnEntry);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Removing entry by id
app.delete("/api/greenhouse/:greenhouse_id", async (req, res) => {
  try {
    const removed_GrnEntry = await Greenhouse.remove({
      _id: req.params.greenhouse_id,
    });

    console.log(removed_GrnEntry);
    res.status(200).json(removed_GrnEntry);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// CRUD: Area
// Getting all data
app.get("/api/area", async (req, res) => {
  try {
    const areaData = await Area.find();
    console.log(areaData);
    res.status(200).json(areaData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Creating a new data entry
app.post("/api/area/add", async (req, res) => {
  const body = req.body;
  const newEntry = new Area({
    greenhouseId: req.body.greenhouseId,
    name: req.body.name,
  });
  console.log(newEntry);

  try {
    await newEntry.save();
    res.status(200).json(newEntry);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Getting entry by id
app.get("/api/area/:area_id", async (req, res) => {
  try {
    const areaEntry = await Area.findOne({ _id: req.params.area_id });
    console.log(areaEntry);
    res.status(200).json(areaEntry);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Updating entry by id
app.patch("/api/area/add/:area_id", async (req, res) => {
  try {
    const updated_AreaEntry = await Area.updateOne(
      { _id: req.params.area_id },
      {
        $set: {
          greenhouseId: req.body.greenhouseId,
          name: req.body.name,
        },
      }
    );

    console.log(updated_AreaEntry);
    res.status(200).json(updated_AreaEntry);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Removing entry by id
app.delete("/api/area/:area_id", async (req, res) => {
  try {
    const removed_AreaEntry = await Area.remove({ _id: req.params.area_id });

    console.log(removed_AreaEntry);
    res.status(200).json(removed_AreaEntry);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// CRUD: Plants data
// Getting all data
app.get("/api/plant", async (req, res) => {
  try {
    const plantData = await Plant.find();
    console.log(plantData);
    res.status(200).json(plantData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Creating a new data entry
app.post("/api/plant/add", async (req, res) => {
  const body = req.body;
  const newEntry = new Plant({
    areaId: body.areaId,
    name: body.name,
    quantity: body.quantity,
  });
  console.log(newEntry);

  try {
    await newEntry.save();
    res.status(200).json(newEntry);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Getting entry by id
app.get("/api/plants/:plant_id", async (req, res) => {
  try {
    const plant = await Plant.findOne({ _id: req.params.plant_id });
    console.log(plant);
    res.status(200).json(plant);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Updating entry by id
app.patch("/api/plants/add/:plant_id", async (req, res) => {
  try {
    const updated_plant = await Plant.updateOne(
      { _id: req.params.plant_id },
      {
        $set: {
          areaId: req.body.areaId,
          name: req.body.name,
          quantity: req.body.quantity,
        },
      }
    );

    console.log(updated_plant);
    res.status(200).json(updated_plant);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Removing entry by id
app.delete("/api/plants/:plant_id", async (req, res) => {
  try {
    const removed_plant = await Plant.remove({ _id: req.params.plant_id });

    console.log(removed_plant);
    res.status(200).json(removed_plant);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// CRUD: Measurement data
// Getting all data

app.get("/api/measurement", async (req, res) => {
  try {
    const measData = await Meas.find();
    res.status(200).json(measData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Creating a new data entry
app.post("/api/measurement/add", async (req, res) => {
  const body = req.body;
  const newEntry = new Meas({
    areaId: body.areaId,
    data: {
      light_intensity: body.data.light_intensity,
      relative_humidity: body.data.relative_humidity,
      temperature: body.data.temperature,
    },
  });

  try {
    await newEntry.save();
    res.status(200).json(newEntry);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Getting entry by id
app.get("/api/measurement/:measurement_id", async (req, res) => {
  try {
    const meas = await Meas.findOne({ _id: req.params.measurement_id });

    res.status(200).json(meas);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Updating entry by id
app.patch("/api/measurement/add/:measurement_id", async (req, res) => {
  try {
    const updated_measurement = await Meas.updateOne(
      { _id: req.params.measurement_id },
      {
        $set: {
          areaId: req.body.areaId,
          data: {
            light_intensity: req.body.data.light_intensity,
            relative_humidity: req.body.data.relative_humidity,
            temperature: req.body.data.temperature,
          },
        },
      }
    );

    console.log(updated_measurement);
    res.status(200).json(updated_measurement);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Removing entry by id
app.delete("/api/measurement/:measurement_id", async (req, res) => {
  try {
    const removed_measurement = await Meas.remove({
      _id: req.params.measurement_id,
    });

    console.log(removed_measurement);
    res.status(200).json(removed_measurement);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Listen
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
