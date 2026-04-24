const {
  createMovie,
  getMovieById,
  updateMovie,
  deleteMovie,
} = require("../movie-api/src/services/movieService");

describe("movieService", () => {
  it("should create a movie", () => {
    const movie = createMovie({
      title: "Avatar",
      genre: "Sci-Fi",
      releaseYear: 2009,
      rating: 8,
    });

    expect(movie.title).toBe("Avatar");
  });

  it("should get a movie by id", () => {
    const movie = createMovie({
      title: "Titanic",
      genre: "Drama",
      releaseYear: 1997,
      rating: 9,
    });

    const found = getMovieById(movie.id);
    expect(found).toBeDefined();
  });

  it("should update a movie", () => {
    const movie = createMovie({
      title: "Old Title",
      genre: "Action",
      releaseYear: 2015,
      rating: 7,
    });

    const updated = updateMovie(movie.id, { title: "New Title" });

    expect(updated).toBeDefined();
    expect(updated.title).toBe("New Title");
  });

  it("should delete a movie", () => {
    const movie = createMovie({
      title: "Delete Me",
      genre: "Thriller",
      releaseYear: 2020,
      rating: 6,
    });

    const deleted = deleteMovie(movie.id);

    expect(deleted).toBeDefined();
  });
});