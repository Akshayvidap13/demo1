const pool = require("../../config/db.js");

module.exports = {
  create: (data, callback) => {
    console.log(data);
    const sql = `insert into employee_db.salaries(emp_no,salary,from_date,to_date) values(?,?,?,?)`;
    pool.query(
      sql,
      [data.emp_no, data.salary, data.from_date, data.to_date],
      (error, results, fields) => {
        if (error) {
          console.log(error);
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getSalaries: (callback) => {
    const sql = `select * from employee_db.salaries`;
    pool.query(sql, [], (error, results, fields) => {
      if (error) {
        console.log(error);
        return callback(error);
      }
      console.log("result", results);
      return callback(null, results);
    });
  },
  getSalariesByNo: (emp_no, callback) => {
    const sql = `select * from employee_db.salaries where emp_no=?`;
    pool.query(sql, [emp_no], (error, results, fields) => {
      if (error) {
        console.log(error);
        return callback(error);
      }
      return callback(null, results[0]);
    });
  },
  updateSalary: (data, callback) => {
    const sql = `update employee_db.salaries set salary=?,from_date=?, to_date=? where emp_no=?`;
    pool.query(
      sql,
      [data.salary, data.from_date, data.to_date, data.emp_no],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
};
