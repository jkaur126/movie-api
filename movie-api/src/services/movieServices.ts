interface Movie {
  id: string;
  title: string;
  genre: string;
  releaseYear: number;
  rating: number;
}

interface MovieQuery {
  genre?: string;
  releaseYear?: number;
  minRating?: number;
  sortBy: "title" | "releaseYear" | "rating";
  order: "asc" | "desc";
  page: number;
  limit: number;
}

let movies: Movie[] = [
  {
    id: "1",
    title: "Inception",
    genre: "Sci-Fi",
    releaseYear: 2010,
    rating: 9,
  },
];

export const getAllMovies = (query: MovieQuery) => {
  let result = [...movies];

  if (query.genre) {
    result = result.filter(
      (movie) => movie.genre.toLowerCase() === query.genre!.toLowerCase()
    );
  }

  if (query.releaseYear) {
    result = result.filter((movie) => movie.releaseYear === query.releaseYear);
  }

  if (query.minRating !== undefined) {
    result = result.filter((movie) => movie.rating >= query.minRating!);
  }

  result.sort((a, b) => {
    const field = query.sortBy;

    if (a[field] < b[field]) return query.order === "asc" ? -1 : 1;
    if (a[field] > b[field]) return query.order === "asc" ? 1 : -1;
    return 0;
  });

  const start = (query.page - 1) * query.limit;
  const end = start + query.limit;

  return {
    total: result.length,
    page: query.page,
    limit: query.limit,
    data: result.slice(start, end),
  };
};

export const getMovieById = (id: string) => movies.find((movie) => movie.id === id);

export const createMovie = (movie: Omit<Movie, "id">) => {
  const newMovie = { id: String(Date.now()), ...movie };
  movies.push(newMovie);
  return newMovie;
};

export const updateMovie = (id: string, updatedData: Partial<Omit<Movie, "id">>) => {
  const index = movies.findIndex((movie) => movie.id === id);

  if (index === -1) return null;

  movies[index] = { ...movies[index], ...updatedData };
  return movies[index];
};

export const deleteMovie = (id: string) => {
  const index = movies.findIndex((movie) => movie.id === id);

  if (index === -1) return null;

  const deleted = movies[index];
  movies.splice(index, 1);
  return deleted;
};