const pool = require("../../config/db.js");

module.exports = {
  create: (data, callback) => {
    console.log(data);
    const sql = `insert into employee_db.weekly_data(id,week_day,week_status,check_in,check_out,duration) values(?,?,?,?,?,?)`;
    pool.query(
      sql,
      [
        data.id,
        data.week_day,
        data.week_status,
        data.check_in,
        data.check_out,
        data.duration,
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
  getWeeklyData: (callback) => {
    const sql = `select * from employee_db.weekly_data`;
    pool.query(sql, [], (error, results, fields) => {
      if (error) {
        console.log(error);
        return callback(error);
      }
      console.log("result", results);
      return callback(null, results);
    });
  },
  getWeeklyDataByID: (id, callback) => {
    const sql = `select * from employee_db.weekly_data where id=?`;
    pool.query(sql, [id], (error, results, fields) => {
      if (error) {
        console.log(error);
        return callback(error);
      }
      return callback(null, results[0]);
    });
  },
  updateWeeklyData: (data, callback) => {
    const sql = `update employee_db.weekly_data set week_day=?,week_status=?, check_in=?, check_out=?, duration=? where id=?`;
    pool.query(
      sql,
      [
        data.week_day,
        data.week_status,
        data.check_in,
        data.check_out,
        data.duration,
        data.id,
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
