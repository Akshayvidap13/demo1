const {
  create,
  getLeaves,
  getLeaveByNo,
  updateLeave,
} = require("./leaves.controller");
const { checkToken } = require("../../auth/tokenvalidation");

const router = require("express").Router();
router.post("/", checkToken, create);
router.get("/", checkToken, getLeaves);
router.get("/:no", checkToken, getLeaveByNo);
router.patch("/", updateLeave, checkToken);

module.exports = router;
