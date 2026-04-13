const express = require("express");
const router = express.Router();
const controller = require("../controllers/movieController");
const upload = require("../middleware/upload");

router.post("/", upload.single("image"), controller.createMovie);
router.post("/", controller.createMovie);
router.get("/", controller.getMovies);
router.put("/:id", controller.updateMovie);
router.delete("/:id", controller.deleteMovie);

module.exports = router;