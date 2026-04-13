const Movie = require("../models/Movie");

//Updated createMovie with image upload support
exports.createMovie = async (req, res) => {
  try {
    const movie = await Movie.create({
      ...req.body,
      image: req.file ? req.file.path : null,
    });

    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all movies
exports.getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update movie
exports.updateMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete movie
exports.deleteMovie = async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};