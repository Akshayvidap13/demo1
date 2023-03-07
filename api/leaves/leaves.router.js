const {
  create,
  getLeaves,
  getLeaveByNo,
  updateLeave,
} = require("./leaves.controller");
const { checkToken } = require("../../auth/tokenvalidation");

const router = require("express").Router();
router.post("/", create);
router.get("/", getLeaves);
router.get("/:no", getLeaveByNo);
router.patch("/", updateLeave);

module.exports = router;
