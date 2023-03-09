const {
  create,
  getTimesheet,
  getTimesheetById,
  updateTimesheet,
  getTimesheetByWId,
} = require("./weekly_timesheet.controller");
// const { checkToken } = require("../../auth/tokenvalidation");

const router = require("express").Router();
router.post("/", create);
router.get("/", getTimesheet);
router.get("/empid/:emp_no/:from_date/:to_date", getTimesheetById);
router.get("/id/:id", getTimesheetByWId);
router.patch("/", updateTimesheet);

module.exports = router;
