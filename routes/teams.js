const router = require("express").Router();
const teamsController = require("../controllers/teams");
const {validadeTeam} = require("../validator/validator");

// Get 
// #swagger.tags = ["teams"]
// #swagger.path = "/teams"
router.get("/", teamsController.getAllTeams);

// #swagger.path ="/teams/{id}"
router.get("/:id", teamsController.getTeamById);

// Post
// #swagger.tags = ["teams"]
// #swagger.path = "/teams"
router.post("/", validadeTeam, teamsController.createTeam);

// Put
// #swagger.tags = ["teams"]
// #swagger.path = "/teams/{id}"
router.put("/:id", validadeTeam, teamsController.updateTeam);

// Delete
// #swagger.tags = ["teams"]
// #swagger.path = "/teams/{id}"
router.delete("/:id", teamsController.deleteTeam);


module.exports = router;