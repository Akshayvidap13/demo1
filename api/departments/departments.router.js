const {
  create,
  getDepartments,
  getDepartmentsByNo,
  updateDepartment,
} = require("./departments.controller");

const router = require("express").Router();
router.post("/", create);
router.get("/", getDepartments);
router.get("/:dept_no", getDepartmentsByNo);
router.patch("/", updateDepartment);

module.exports = router;
