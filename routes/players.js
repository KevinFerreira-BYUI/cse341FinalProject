const router = require("express").Router();
const playersController = require("../controllers/players");

// Get 
router.get("/", playersController.getAllPlayers);
//router.get("/:id");





module.exports = router;