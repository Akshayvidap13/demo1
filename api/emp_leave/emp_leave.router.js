const {
  create,
  getEmpLeaves,
  getEmpLeaveByNo,
  updateEmpLeave,
} = require("./emp_leave.controller");
const { checkToken } = require("../../auth/tokenvalidation");

const router = require("express").Router();
router.post("/", checkToken, create);
router.get("/", checkToken, getEmpLeaves);
router.get("/:no", checkToken, getEmpLeaveByNo);
router.patch("/", checkToken, updateEmpLeave);

module.exports = router;
