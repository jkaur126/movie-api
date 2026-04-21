const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Movie API",
      version: "1.0.0",
      description: "API documentation for the Movie API project",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      schemas: {
        Movie: {
          type: "object",
          properties: {
            id: { type: "string", example: "1" },
            title: { type: "string", example: "Inception" },
            genre: { type: "string", example: "Sci-Fi" },
            releaseYear: { type: "number", example: 2010 },
            rating: { type: "number", example: 9 },
          },
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;