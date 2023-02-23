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
router.post("/", create);
router.get("/", getEmployee);
router.get("/:id", getEmployeeById);
router.patch("/", updateEmployee);

module.exports = router;
