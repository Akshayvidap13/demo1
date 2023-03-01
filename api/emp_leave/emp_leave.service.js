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
    const sql = `select timesheetdb.emp_leave.emp_leave_id,timesheetdb.emp_leave.from_date,timesheetdb.emp_leave.to_date, 
                  timesheetdb.emp_leave.duration,timesheetdb.emp_leave.reason, timesheetdb.emp_leave.emp_no,timesheetdb.emp_leave.status,
                  timesheetdb.leaves.leave_name
                  from timesheetdb.emp_leave JOIN timesheetdb.leaves 
                  ON timesheetdb.emp_leave.leave_no=timesheetdb.leaves.leave_no
                  where emp_no=?`;
    pool.query(sql, [emp_no], (error, results, fields) => {
      if (error) {
        console.log(error);
        return callback(error);
      }
      return callback(null, results);
    });
  },
  getEmpLeavesGroupBy: (emp_no, status, callback) => {
    const sql = `select sum(timesheetdb.emp_leave.duration) as sum,timesheetdb.emp_leave.status, timesheetdb.leaves.leave_name 
                  from timesheetdb.emp_leave JOIN timesheetdb.leaves 
                  ON timesheetdb.emp_leave.leave_no=timesheetdb.leaves.leave_no 
                  where timesheetdb.emp_leave.emp_no=? and timesheetdb.emp_leave.status=?
                  group by timesheetdb.emp_leave.leave_no;`;
    pool.query(sql, [emp_no, status], (error, results, fields) => {
      console.log("Service Result:-", results);
      console.log("Service Error:-", error);
      if (error) {
        console.log(error);
        return callback(error);
      }
      return callback(null, results);
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
