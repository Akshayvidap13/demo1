const pool = require("../../config/db");

module.exports = {
  create: (data, callback) => {
    console.log("S Data", data);
    const sql = `insert into timesheetdb.timesheet(
        emp_no,
        totalhours,
        hours,
        project,
        status,
        approved_by,
        reason,
        remark,
        overtime,
        day,
        date,
        created_at) 
        values(?,?,?,?,?,?,?,?,?,?,?,NOW())`;
    pool.query(
      sql,
      [
        data.emp_no,
        data.totalhours,
        data.hours,
        data.project,
        data.status,
        data.approved_by,
        data.reason,
        data.remark,
        data.overtime,
        data.day,
        data.date,
      ],
      (error, results, fields) => {
        if (error) {
          console.log(error);
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getTimesheet: (callback) => {
    const sql = `select * from timesheetdb.timesheet`;
    pool.query(sql, [], (error, results, fields) => {
      if (error) {
        console.log(error);
        return callback(error);
      }
      console.log("result", results);
      return callback(null, results);
    });
  },
  getTimesheetById: (emp_no, callback) => {
    const sql = `select * from timesheetdb.timesheet where emp_no=?`;
    pool.query(sql, [emp_no], (error, results, fields) => {
      if (error) {
        console.log(error);
        return callback(error);
      }
      return callback(null, results[0]);
    });
  },
  updateTimesheet: (data, callback) => {
    const sql = `update timesheetdb.timesheet set 
        totalhours=?,
        hours=?,
        project=?,
        status=?,
        approved_by=?,
        reason=?,
        remark=?,
        overtime=?,
        day=?,
        date=?,
        updated_at=NOW()
    where emp_no=?`;
    pool.query(
      sql,
      [
        data.totalhours,
        data.hours,
        data.project,
        data.status,
        data.approved_by,
        data.reason,
        data.remark,
        data.overtime,
        data.day,
        data.date,
        data.emp_no,
      ],
      (error, results, fields) => {
        console.log(error, results);
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
};
