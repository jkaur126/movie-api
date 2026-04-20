import { Request, Response } from "express";
import * as movieService from "../services/movieService";

export const getMovies = (req: Request, res: Response): void => {
  const result = movieService.getAllMovies(req.query);
  res.status(200).json(result);
};

export const getMovie = (req: Request, res: Response): void => {
  const movie = movieService.getMovieById(req.params.id);

  if (!movie) {
    res.status(404).json({ message: "Movie not found" });
    return;
  }

  res.status(200).json(movie);
};

export const addMovie = (req: Request, res: Response): void => {
  const movie = movieService.createMovie(req.body);
  res.status(201).json(movie);
};

export const editMovie = (req: Request, res: Response): void => {
  const movie = movieService.updateMovie(req.params.id, req.body);

  if (!movie) {
    res.status(404).json({ message: "Movie not found" });
    return;
  }

  res.status(200).json(movie);
};

export const removeMovie = (req: Request, res: Response): void => {
  const deleted = movieService.deleteMovie(req.params.id);

  if (!deleted) {
    res.status(404).json({ message: "Movie not found" });
    return;
  }

  res.status(200).json({ message: "Movie deleted successfully" });
};