var express = require("express");
// var path = require("path");
// var cookieParser = require("cookie-parser");
// var logger = require("morgan");
const bodyParser = require("body-parser");

const employeeRouter = require("./api/employee_details/employee_details.router");
const leavesRouter = require("./api/leaves/leaves.router");
const departmentsRouter = require("./api/departments/departments.router");
const deptRouter = require("./api/dept_emp/dept_emp.router");
const emp_leaveRouter = require("./api/emp_leave/emp_leave.router");
const salariesRouter = require("./api/salaries/salaries.router");
const weekly_dataRouter = require("./api/weekly_data/weekly_data.router");
const titlesRouter = require("./api/titles/titles.router");
const projectsRouter = require("./api/projects/projects.router");
const holidaysRouter = require("./api/holidays/holidays.router");
const weekly_timesheetRouter = require("./api/weekly_timesheet/weekly_timesheet.router");
const timesheet = require("./api/timesheet/timesheet.router");

var app = express();

// app.use(logger("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
// });

require("dotenv").config();
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/employee_details", employeeRouter);
app.use("/api/leaves", leavesRouter);
app.use("/api/departments", departmentsRouter);
app.use("/api/dept_emp", deptRouter);
app.use("/api/emp_leave", emp_leaveRouter);
app.use("/api/salaries", salariesRouter);
app.use("/api/weekly_data", weekly_dataRouter);
app.use("/api/titles", titlesRouter);
app.use("/api/projects", projectsRouter);
app.use("/api/holidays", holidaysRouter);
app.use("/api/weekly_timesheet", weekly_timesheetRouter);
app.use("/api/timesheet", timesheet);
app.listen(process.env.APP_PORT, () => {
  console.log(`server running on port ${process.env.APP_PORT}`);
});
module.exports = app;
