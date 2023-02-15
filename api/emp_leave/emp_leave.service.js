const pool = require("../../config/db.js");

module.exports = {
  create: (data, callback) => {
    console.log(data);
    const sql = `insert into employee_db.emp_leave(emp_no,leave_no,from_date,to_date,no_of_days) values(?,?,?,?,?)`;
    pool.query(
      sql,
      [
        data.emp_no,
        data.leave_no,
        data.from_date,
        data.to_date,
        data.no_of_days,
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
  getEmpLeaves: (callback) => {
    const sql = `select * from employee_db.emp_leave`;
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
    const sql = `select * from employee_db.emp_leave where emp_no=?`;
    pool.query(sql, [emp_no], (error, results, fields) => {
      if (error) {
        console.log(error);
        return callback(error);
      }
      return callback(null, results[0]);
    });
  },
  updateLeave: (data, callback) => {
    const sql = `update employee_db.emp_leave set leave_no=?,from_date=?, to_date=?, no_of_days=?, where emp_no=?`;
    pool.query(
      sql,
      [
        data.leave_no,
        data.from_date,
        data.to_date,
        data.no_of_days,
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
