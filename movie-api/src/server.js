require("dotenv").config();
const app = require("./app");

//Add Swagger imports
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

//Swagger configuration
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
      description: "API documentation for my project",
    },
  },
  apis: ["./routes/*.js"], 
};

const swaggerSpec = swaggerJsDoc(options);

//Swagger route 
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
