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

/**
 * @swagger
 * tags:
 *   name: Movies
 *   description: Movie API endpoints
 */

/**
 * @swagger
 * /movies:
 *   get:
 *     summary: Get all movies
 *     tags: [Movies]
 *     parameters:
 *       - in: query
 *         name: genre
 *         schema:
 *           type: string
 *       - in: query
 *         name: releaseYear
 *         schema:
 *           type: integer
 *       - in: query
 *         name: minRating
 *         schema:
 *           type: number
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *           enum: [title, releaseYear, rating]
 *       - in: query
 *         name: order
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: List of movies
 */
router.get("/", authenticate, validate(queryMovieSchema, "query"), getMovies);

/**
 * @swagger
 * /movies/{id}:
 *   get:
 *     summary: Get movie by ID
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single movie
 *       404:
 *         description: Movie not found
 */
router.get("/:id", authenticate, getMovie);

/**
 * @swagger
 * /movies:
 *   post:
 *     summary: Create movie
 *     tags: [Movies]
 *     responses:
 *       201:
 *         description: Movie created successfully
 */
router.post("/", authenticate, authorize("admin"), validate(createMovieSchema), addMovie);

/**
 * @swagger
 * /movies/{id}:
 *   put:
 *     summary: Update movie
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Movie updated successfully
 *       404:
 *         description: Movie not found
 */
router.put("/:id", authenticate, authorize("admin"), validate(updateMovieSchema), editMovie);

/**
 * @swagger
 * /movies/{id}:
 *   delete:
 *     summary: Delete movie
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Movie deleted successfully
 *       404:
 *         description: Movie not found
 */
router.delete("/:id", authenticate, authorize("admin"), removeMovie);

export default router;