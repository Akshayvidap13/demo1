const {
  create,
  getLeaves,
  getLeaveByNo,
  updateLeave,
} = require("./leaves.controller");

const router = require("express").Router();
router.post("/", create);
router.get("/", getLeaves);
router.get("/:no", getLeaveByNo);
router.patch("/", updateLeave);

module.exports = router;
