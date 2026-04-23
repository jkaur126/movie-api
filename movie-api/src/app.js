const express = Require("express");
const movieRoutes = require("./routes/movieRoutes");

const app = express();

app.use(express.json());

app.use("/movies", movieRoutes);

module.exports = app;