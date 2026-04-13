const express = require("express");
const app = express();
const connectDB = require("./config/db");
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Running");
});

module.exports = app;