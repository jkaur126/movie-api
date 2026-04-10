const Movie = require("../models/movieModel");

// GET all movies
exports.getAllMovies = (req, res) => {
  res.json(Movie.getAll());
};

// GET movie by ID
exports.getMovieById = (req, res) => {
  const movie = Movie.getById(Number(req.params.id));
  if (!movie) return res.status(404).json({ message: "Movie not found" });

  res.json(movie);
};

// CREATE movie
exports.createMovie = (req, res) => {
  const { title, genre, releaseYear, rating } = req.body;

  if (!title || !genre) {
    return res.status(400).json({ message: "Title and genre required" });
  }

  const newMovie = Movie.create({
    title,
    genre,
    releaseYear,
    rating
  });

  res.status(201).json(newMovie);
};

// UPDATE movie
exports.updateMovie = (req, res) => {
  const updated = Movie.update(Number(req.params.id), req.body);

  if (!updated) {
    return res.status(404).json({ message: "Movie not found" });
  }

  res.json(updated);
};

// DELETE movie
exports.deleteMovie = (req, res) => {
  const deleted = Movie.remove(Number(req.params.id));

  if (!deleted) {
    return res.status(404).json({ message: "Movie not found" });
  }

  res.json({ message: "Movie deleted successfully" });
};