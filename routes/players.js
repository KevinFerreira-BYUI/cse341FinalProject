const router = require("express").Router();
const playersController = require("../controllers/players");
const {validadePlayer} = require("../validator/validator");


// Get 
// #swagger.tags = ["players"]
// #swagger.path = "/players"
router.get("/", playersController.getAllPlayers);

// #swagger.path = "/players/{id}"
router.get("/:id", playersController.getPlayerById);

// Post
// #swagger.tags = ["players"]
// #swagger.path = "/players"
router.post("/", validadePlayer, playersController.addPlater);

// Put 
// #swagger.tags = ["players"]
// #swagger.path = "/players"
router.put("/:id", validadePlayer, playersController.updatePlayer);

// Delete
// #swagger.tags = ["players"]
// #swagger.path = "/players"
router.delete("/:id", playersController.deletePLayer);

module.exports = router;