const {
  create,
  getTimesheet,
  getTimesheetById,
  updateTimesheet,
  getTimesheetByWId,
  updateStatus,
  updateStatusOnly,
  getTimesheetEmployeeByID,
  getTimesheetByIdAllData,
} = require("./weekly_timesheet.controller");
// const { checkToken } = require("../../auth/tokenvalidation");

const router = require("express").Router();
router.post("/", create);
router.get("/", getTimesheet);
router.get("/empid/:emp_no/:from_date/:to_date", getTimesheetById);
router.get("/empidData/:emp_no/:from_date/:to_date", getTimesheetByIdAllData);
router.get("/onlyempid/:emp_no", getTimesheetEmployeeByID);
router.get("/id/:id", getTimesheetByWId);
router.patch("/", updateTimesheet);
router.patch("/status", updateStatus);
router.patch("/statusonly", updateStatusOnly);

module.exports = router;
