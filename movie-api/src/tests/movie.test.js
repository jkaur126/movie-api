const request = require("supertest");
const app = require("../app");

describe("Movie API", () => {

  it("GET /movies should return all movies", async () => {
    const res = await request(app).get("/movies");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("POST /movies should create movie", async () => {
    const res = await request(app).post("/movies").send({
      title: "Interstellar",
      genre: "Sci-Fi",
      releaseYear: 2014,
      rating: 10
    });

    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe("Interstellar");
  });

  it("GET /movies/:id should return movie", async () => {
    const res = await request(app).get("/movies/1");
    expect([200, 404]).toContain(res.statusCode);
  });

  it("PUT /movies/:id should update movie", async () => {
    const res = await request(app).put("/movies/1").send({
      rating: 8
    });

    expect([200, 404]).toContain(res.statusCode);
  });

  it("DELETE /movies/:id should delete movie", async () => {
    const res = await request(app).delete("/movies/1");
    expect([200, 404]).toContain(res.statusCode);
  });

});
