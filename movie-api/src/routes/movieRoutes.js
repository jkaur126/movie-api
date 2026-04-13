const express = require("express");
const router = express.Router();
const controller = require("../controllers/movieController");

router.post("/", controller.createMovie);
router.get("/", controller.getMovies);
router.put("/:id", controller.updateMovie);
router.delete("/:id", controller.deleteMovie);

module.exports = router;