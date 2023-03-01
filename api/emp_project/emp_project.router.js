const {
  create,
  getEmpProject,
  getEmpProjectById,
  updateEmpProject,
} = require("./emp_project.controller");

const router = require("express").Router();
router.post("/", create);
router.get("/", getEmpProject);
router.get("/:id", getEmpProjectById);
router.patch("/", updateEmpProject);
module.exports = router;
