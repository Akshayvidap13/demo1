const {
  create,
  getEmployee,
  getEmployeeById,
  updateEmployee,
} = require("./employee_details.controller");

const router = require("express").Router();
router.post("/", create);
router.get("/", getEmployee);
router.get("/:id", getEmployeeById);
router.patch("/", updateEmployee);

module.exports = router;
