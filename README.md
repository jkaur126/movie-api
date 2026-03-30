# movie-api

##  Description
This is a simple Restful API for managing movie data. It allows users to create, read, update, and delete movies. The API is designed to demonstrate basic backend development concepts and Restful principles.

## Features
- Add a new movie
- View all movies
- View a specific movie by ID
- Update movie details
- Delete a movie

##  API Endpoints

 Method  Endpoint      Description               
 GET     /movies      Get all movies               
 GET     /movies/:id  Get a single movie by ID     
 POST    /movies      Create a new movie           
 PUT     /movies/:id  Update an existing movie    
 DELETE  /movies/:id  Delete a movie              

## Data Structure

Each movie object contains:

```json
{
  "id": 1,
  "title": "Inception",
  "genre": "Sci-Fi",
  "releaseYear": 2010,
  "rating": 9
}
