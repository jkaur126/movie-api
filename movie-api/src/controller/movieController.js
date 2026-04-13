const Movie = require("../models/Movie");

exports.createMovie = async (req, res) => {
  const movie = await Movie.create(req.body);
  res.status(201).json(movie);
};

exports.getMovies = async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
};

exports.updateMovie = async (req, res) => {
  const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(movie);
};

exports.deleteMovie = async (req, res) => {
  await Movie.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};