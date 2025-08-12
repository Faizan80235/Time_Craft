const mongoose = require("mongoose");

const connectedDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://fa3031980:2pdDvaqQROkdvrur@cluster0.gaflzq9.mongodb.net/Time_craft");
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1); // Exit process on failure
  }
};

module.exports = connectedDB;
