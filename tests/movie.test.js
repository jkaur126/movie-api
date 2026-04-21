const request = require("supertest");
const app = require("../src/app");

describe("Movie API", () => {
  it("should return movies route response", async () => {
    const response = await request(app).get("/movies");
    expect(response.statusCode).toBe(200);
  });
});