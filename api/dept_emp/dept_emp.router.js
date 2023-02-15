const {
  create,
  getDepartmentEmployee,
  getDepartmentEmployeeByNo,
  updateDepartmentEmployee,
} = require("./dept_emp.controller");

const router = require("express").Router();
router.post("/", create);
router.get("/", getDepartmentEmployee);
router.get("/:dept_emp_id", getDepartmentEmployeeByNo);
router.patch("/", updateDepartmentEmployee);

module.exports = router;
