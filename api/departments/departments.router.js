const {
  create,
  getDepartments,
  getDepartmentsByNo,
  updateDepartment,
} = require("./departments.controller");
const { checkToken } = require("../../auth/tokenvalidation");

const router = require("express").Router();
router.post("/", checkToken, create);
router.get("/", checkToken, getDepartments);
router.get("/:dept_no", checkToken, getDepartmentsByNo);
router.patch("/", checkToken, updateDepartment);

module.exports = router;
