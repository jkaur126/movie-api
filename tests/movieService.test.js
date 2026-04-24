const {
  createMovie,
  getMovieById,
  updateMovie,
  deleteMovie,
} = require("../src/services/movieServices");

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
});