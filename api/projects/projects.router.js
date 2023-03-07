const {
  create,
  getProjects,
  getProjectsById,
  updateProjects,
} = require("./projects.controller");
const { checkToken } = require("../../auth/tokenvalidation");

const router = require("express").Router();
router.post("/", create);
router.get("/", getProjects);
router.get("/:id", getProjectsById);
router.patch("/", updateProjects);

module.exports = router;
