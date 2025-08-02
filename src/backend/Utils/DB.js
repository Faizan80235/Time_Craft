const mongoose = require("mongoose");

const connectedDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Time_Craft");
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1); // Exit process on failure
  }
};

module.exports = connectedDB;
