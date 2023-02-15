const pool = require("../../config/db.js");

module.exports = {
  create: (data, callback) => {
    console.log(data);
    const sql = `insert into employee_db.leaves(leave_name) values(?)`;
    pool.query(sql, [data.leave_name], (error, results, fields) => {
      if (error) {
        console.log(error);
        return callback(error);
      }
      return callback(null, results);
    });
  },
  getLeaves: (callback) => {
    const sql = `select * from employee_db.leaves`;
    pool.query(sql, [], (error, results, fields) => {
      if (error) {
        console.log(error);
        return callback(error);
      }
      console.log("result", results);
      return callback(null, results);
    });
  },
  getLeaveByNo: (leave_no, callback) => {
    const sql = `select * from employee_db.leaves where leave_no=?`;
    pool.query(sql, [leave_no], (error, results, fields) => {
      if (error) {
        console.log(error);
        return callback(error);
      }
      return callback(null, results[0]);
    });
  },
  updateLeave: (data, callback) => {
    const sql = `update employee_db.leaves set leave_name=? where leave_no=?`;
    pool.query(
      sql,
      [data.leave_name, data.leave_no],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
};
