const movieService = require("../services/movieService");

const getMovies = (req, res) => {
  const result = movieService.getAllMovies(req.query);
  res.status(200).json(result);
};

const getMovie = (req, res) => {
  const movie = movieService.getMovieById(req.params.id);

  if (!movie) {
    return res.status(404).json({ message: "Movie not found" });
  }

  res.status(200).json(movie);
};

const addMovie = (req, res) => {
  const movie = movieService.createMovie(req.body);
  res.status(201).json(movie);
};

const editMovie = (req, res) => {
  const movie = movieService.updateMovie(req.params.id, req.body);

  if (!movie) {
    return res.status(404).json({ message: "Movie not found" });
  }

  res.status(200).json(movie);
};

const removeMovie = (req, res) => {
  const movie = movieService.deleteMovie(req.params.id);

  if (!movie) {
    return res.status(404).json({ message: "Movie not found" });
  }

  res.status(200).json({ message: "Movie deleted successfully" });
};

module.exports = {
  getMovies,
  getMovie,
  addMovie,
  editMovie,
  removeMovie,
};