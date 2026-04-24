const request = require("supertest");
const app = require("../movie-api/src/app");

describe("Movie API", () => {
  it("should return movies route response", async () => {
    const response = await request(app).get("/movies");
    
    expect([200, 401]).toContain(response.statusCode);
  });
});