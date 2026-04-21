import express from "express";
import movieRoutes from "./routes/movieRoutes";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from ".src/config/swagger";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/movies", movieRoutes);

export default app;