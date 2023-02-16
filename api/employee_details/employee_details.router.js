const {
  create,
  getEmployee,
  getEmployeeById,
  updateEmployee,
  login,
} = require("./employee_details.controller");
const { checkToken } = require("../../auth/tokenvalidation");

const router = require("express").Router();
router.post("/login", login);
router.post("/", checkToken, create);
router.get("/", checkToken, getEmployee);
router.get("/:id", checkToken, getEmployeeById);
router.patch("/", checkToken, updateEmployee);

module.exports = router;
