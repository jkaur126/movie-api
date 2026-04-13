const express = require("express");
const app = express();

// Middleware FIRST
app.use(express.json());

// DB Connection
const connectDB = require("./config/db");
connectDB();

// Routes
const movieRoutes = require("./routes/movieRoutes");
app.use("/api/movies", movieRoutes);

// Swagger imports
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

// Swagger config
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Movie API",
      version: "1.0.0",
      description: "API documentation for Movie API",
    },
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsDoc(options);

//Swagger route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Test route
app.get("/", (req, res) => {
  res.send("API Running");
});

module.exports = app;