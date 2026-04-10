const movies = require("../data/movies");

let nextId = 2;

const getAll = () => movies;

const getById = (id) => movies.find(m => m.id === id);

const create = (movie) => {
  const newMovie = { id: nextId++, ...movie };
  movies.push(newMovie);
  return newMovie;
};

const update = (id, data) => {
  const index = movies.findIndex(m => m.id === id);
  if (index === -1) return null;

  movies[index] = { ...movies[index], ...data };
  return movies[index];
};

const remove = (id) => {
  const index = movies.findIndex(m => m.id === id);
  if (index === -1) return false;

  movies.splice(index, 1);
  return true;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};