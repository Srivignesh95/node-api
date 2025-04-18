const mongoose = require("mongoose");
require("dotenv").config(); // make sure this is at the top

async function connect() {
  if (mongoose.connection.readyState === 1) return;

  const dbUrl = process.env.MONGO_URI; // use the correct value
  console.log("Connecting to:", dbUrl); // Optional debug

  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error("Connection error:", err);
    throw err;
  }
}

module.exports = { connect };
