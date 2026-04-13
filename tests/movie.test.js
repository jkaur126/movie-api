const request = require("supertest");
const app = require("../src/app");

describe("Movie API", () => {
  it("should create movie", async () => {
    const res = await request(app)
      .post("/api/movies")
      .send({ title: "Test Movie" });

    expect(res.statusCode).toBe(201);
  });

  it("should get movies", async () => {
    const res = await request(app).get("/api/movies");
    expect(res.statusCode).toBe(200);
  });
});