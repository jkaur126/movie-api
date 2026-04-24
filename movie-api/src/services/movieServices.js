let movies = [
  {
    id: "1",
    title: "Inception",
    genre: "Sci-Fi",
    releaseYear: 2010,
    rating: 9,
  },
];

function createMovie(movie) {
  const newMovie = {
    id: String(movies.length + 1),
    ...movie,
  };

  movies.push(newMovie);
  return newMovie;
}

function getMovieById(id) {
  return movies.find((movie) => movie.id === id);
}

function updateMovie(id, updatedMovie) {
  const index = movies.findIndex((movie) => movie.id === id);

  if (index === -1) {
    return null;
  }

  movies[index] = {
    ...movies[index],
    ...updatedMovie,
  };

  return movies[index];
}

function deleteMovie(id) {
  const index = movies.findIndex((movie) => movie.id === id);

  if (index === -1) {
    return false;
  }

  movies.splice(index, 1);
  return true;
}

module.exports = {
  createMovie,
  getMovieById,
  updateMovie,
  deleteMovie,
};