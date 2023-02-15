const {
  create,
  getEmpLeaves,
  getEmpLeaveByNo,
  updateEmpLeave,
} = require("./emp_leave.controller");

const router = require("express").Router();
router.post("/", create);
router.get("/", getEmpLeaves);
router.get("/:no", getEmpLeaveByNo);
router.patch("/", updateEmpLeave);

module.exports = router;
