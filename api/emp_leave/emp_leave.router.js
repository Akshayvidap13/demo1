const {
  create,
  getEmpLeaves,
  getEmpLeaveByNo,
  updateEmpLeave,
  getEmpLeavesGroupBy,
  getEmpLeavesByDate,
} = require("./emp_leave.controller");
const { checkToken } = require("../../auth/tokenvalidation");
console.log("In route");
const router = require("express").Router();
router.post("/", create);
router.get("/", getEmpLeaves);
router.get("/:no", getEmpLeaveByNo);
router.get("/empLeaveByDate/:emp_no/:from_date/:to_date", getEmpLeavesByDate);
router.get("/groupby/:emp_no/:status", getEmpLeavesGroupBy);
router.patch("/", updateEmpLeave);

module.exports = router;
