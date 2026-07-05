const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const Crop = require("./models/Crop");
//console.log(process.env.MONGO_URI);
const app = express();
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.log("❌ Database Connection Error");
    console.log(err);
  });
app.use(cors());
app.use(express.json());
//app data



app.get("/api/crops", async (req, res) => {
  console.log("🚀 NEW MONGODB GET ROUTE");

  try {
    const crops = await Crop.find();

    console.log(crops);

    res.status(200).json(crops);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
app.get("/api/crops/search", async (req, res) => {
  try {
    const query = req.query.q;

    if (!query) {
      return res.status(400).json({
        message: "Search query is required",
      });
    }

    const results = await Crop.find({
      name: { $regex: query, $options: "i" }
    });

    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
app.get("/api/crops/:id", async (req, res) => {
  try {
    const crop = await Crop.findById(req.params.id);

    if (!crop) {
      return res.status(404).json({
        message: "Crop not found",
      });
    }

    res.status(200).json(crop);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
app.post("/api/crops", async (req, res) => {
  try {
    const { name, season, disease } = req.body;

    if (!name || !season || !disease) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const crop = new Crop({
      name,
      season,
      disease,
    });

    await crop.save();

    res.status(201).json(crop);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
  
  
app.put("/api/crops/:id", async (req, res) => {
  try {
    const crop = await Crop.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!crop) {
      return res.status(404).json({
        message: "Crop not found",
      });
    }

    res.status(200).json(crop);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.delete("/api/crops/:id", async (req, res) => {
  try {
    const crop = await Crop.findByIdAndDelete(req.params.id);

    if (!crop) {
      return res.status(404).json({
        message: "Crop not found",
      });
    }

    res.status(200).json({
      message: "Crop deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
