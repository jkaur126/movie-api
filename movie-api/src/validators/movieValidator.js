const Joi = require("joi");

const createMovieSchema = Joi.object({
  title: Joi.string().trim().min(1).max(100).required(),
  genre: Joi.string().trim().min(1).max(50).required(),
  releaseYear: Joi.number().integer().min(1888).max(new Date().getFullYear()).required(),
  rating: Joi.number().min(0).max(10).required(),
});

const updateMovieSchema = Joi.object({
  title: Joi.string().trim().min(1).max(100),
  genre: Joi.string().trim().min(1).max(50),
  releaseYear: Joi.number().integer().min(1888).max(new Date().getFullYear()),
  rating: Joi.number().min(0).max(10),
}).min(1);

const queryMovieSchema = Joi.object({
  genre: Joi.string().trim(),
  releaseYear: Joi.number().integer().min(1888).max(new Date().getFullYear()),
  minRating: Joi.number().min(0).max(10),
  sortBy: Joi.string().valid("title", "releaseYear", "rating").default("title"),
  order: Joi.string().valid("asc", "desc").default("asc"),
  page: Joi.number().integer().min(1).default(1),
  limit: Joi.number().integer().min(1).max(50).default(10),
});

module.exports = {
  createMovieSchema,
  updateMovieSchema,
  queryMovieSchema,
};