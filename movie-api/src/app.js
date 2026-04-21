const express = require("express");
const movieRoutes = require("./routes/movieRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require(".src/config/swagger");
const app = express();

app.use(express.json());
app.use("/movies", movieRoutes);

module.exports = app;