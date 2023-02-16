const {
  create,
  getDepartmentEmployee,
  getDepartmentEmployeeByNo,
  updateDepartmentEmployee,
} = require("./dept_emp.controller");
const { checkToken } = require("../../auth/tokenvalidation");

const router = require("express").Router();
router.post("/", checkToken, create);
router.get("/", checkToken, getDepartmentEmployee);
router.get("/:dept_emp_id", checkToken, getDepartmentEmployeeByNo);
router.patch("/", checkToken, updateDepartmentEmployee);

module.exports = router;
