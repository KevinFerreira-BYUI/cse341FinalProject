const router = require("express").Router();
const playersController = require("../controllers/players");
const {validadePlayer} = require("../validator/validator");


// Get 
router.get("/", playersController.getAllPlayers);
router.get("/:id", playersController.getPlayerById);

// Post
router.post("/", validadePlayer, playersController.addPlater);

// Put 
router.put("/:id", validadePlayer, playersController.updatePlayer);

// Delete
router.delete("/:id", playersController.deletePLayer);

module.exports = router;