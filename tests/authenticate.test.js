jest.mock("../movie-api/src/config/firebase", () => ({
  auth: () => ({
    verifyIdToken: jest.fn(),
  }),
}));

const authenticate = require("../movie-api/src/middleware/authenticate");

describe("authenticate middleware", () => {
  const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
  };

  it("should return 401 when token is missing", async () => {
    const req = { headers: {} };
    const res = mockResponse();
    const next = jest.fn();

    await authenticate(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      message: "Unauthorized: missing token",
    });
    expect(next).not.toHaveBeenCalled();
  });
});