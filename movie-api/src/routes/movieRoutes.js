import express from "express";
import {
  getMovies,
  getMovie,
  addMovie,
  editMovie,
  removeMovie,
} from "../controllers/movieController";
import { validate } from "../middleware/validate";
import {
  createMovieSchema,
  updateMovieSchema,
  queryMovieSchema,
} from "../validators/movieValidator";
import { authenticate } from "../middleware/authenticate";
import { authorize } from "../middleware/authorize";

const router = express.Router();

router.get("/", authenticate, validate(queryMovieSchema, "query"), getMovies);
router.get("/:id", authenticate, getMovie);
router.post("/", authenticate, authorize("admin"), validate(createMovieSchema), addMovie);
router.put("/:id", authenticate, authorize("admin"), validate(updateMovieSchema), editMovie);
router.delete("/:id", authenticate, authorize("admin"), removeMovie);

export default router;