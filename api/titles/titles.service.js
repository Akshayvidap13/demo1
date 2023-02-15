const pool = require("../../config/db.js");

module.exports = {
  create: (data, callback) => {
    console.log(data);
    const sql = `insert into employee_db.titles(emp_no,title,from_date,to_date) values(?,?,?,?)`;
    pool.query(
      sql,
      [data.emp_no, data.title, data.from_date, data.to_date],
      (error, results) => {
        if (error) {
          console.log(error);
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  getTitles: (callback) => {
    const sql = `select * from employee_db.titles`;
    pool.query(sql, [], (error, results) => {
      if (error) {
        console.log(error);
        return callback(error);
      }
      return callback(null, results);
    });
  },

  getTitleByEmpno: (emp_no, callback) => {
    const sql = `select * from employee_db.titles where emp_no=?`;
    pool.query(sql, [emp_no], (error, results) => {
      if (error) {
        console.log(error);
        return callback(error);
      }
      return callback(null, results[0]);
    });
  },

  updatetitle: (data, callback) => {
    const sql = `update employee_db.titles set title=?, from_date=?, to_date=? where emp_no=?`;
    pool.query(
      sql,
      [data.title, data.from_date, data.to_date, data.emp_no],
      (error, results) => {
        if (error) {
          console.log(error);
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
};
