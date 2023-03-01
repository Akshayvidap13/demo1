const {
  create,
  getTimesheet,
  getTimesheetById,
  updateTimesheet,
} = require("./timesheet.controller");
// const { checkToken } = require("../../auth/tokenvalidation");

const router = require("express").Router();
router.post("/", create);
router.get("/", getTimesheet);
router.get("/:id", getTimesheetById);
router.patch("/", updateTimesheet);

module.exports = router;
