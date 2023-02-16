const {
  create,
  getProjects,
  getProjectsById,
  updateProjects,
} = require("./projects.controller");
const { checkToken } = require("../../auth/tokenvalidation");

const router = require("express").Router();
router.post("/", checkToken, create);
router.get("/", checkToken, getProjects);
router.get("/:id", checkToken, getProjectsById);
router.patch("/", checkToken, updateProjects);

module.exports = router;
