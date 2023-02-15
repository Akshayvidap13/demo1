const pool = require("../../config/db.js");

module.exports = {
  create: (data, callback) => {
    console.log(data);
    const sql = `insert into timesheetdb.emp_leave(
      from_date,
      to_date,
      duration,
      reason,
      leave_no,
      created_at,
      emp_no
      ) values(?,?,?,?,?,NOW(),?)`;
    pool.query(
      sql,
      [
        data.from_date,
        data.to_date,
        data.duration,
        data.reason,
        data.leave_no,
        data.emp_no,
      ],
      (error, results, fields) => {
        if (error) {
          console.log("error", error);
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getEmpLeaves: (callback) => {
    const sql = `select * from timesheetdb.emp_leave`;
    pool.query(sql, [], (error, results, fields) => {
      if (error) {
        console.log(error);
        return callback(error);
      }
      console.log("result", results);
      return callback(null, results);
    });
  },
  getEmpLeaveByNo: (emp_no, callback) => {
    const sql = `select * from timesheetdb.emp_leave where emp_no=?`;
    pool.query(sql, [emp_no], (error, results, fields) => {
      if (error) {
        console.log(error);
        return callback(error);
      }
      return callback(null, results[0]);
    });
  },
  updateEmpLeave: (data, callback) => {
    const sql = `update timesheetdb.emp_leave set from_date=?, 
    to_date=?,
    duration=?,
    reason=?,
    leave_no=?,
    emp_leave_id=?
    where emp_no=?`;
    pool.query(
      sql,
      [
        data.from_date,
        data.to_date,
        data.duration,
        data.reason,
        data.leave_no,
        data.emp_leave_id,
        data.emp_no,
      ],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
};
