const pool = require("../../config/db.js");

module.exports = {
  create: (data, callback) => {
    const sql = `insert into timesheetdb.holidays(date,day,festival,remark) values(?,?,?,?)`;
    pool.query(
      sql,
      [data.date, data.day, data.festival, data.remark],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getHolidays: (callback) => {
    const sql = `select * from timesheetdb.holidays`;
    pool.query(sql, [], (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },
  getHolidaysById: (holiday_id, callback) => {
    const sql = `select * from timesheetdb.holidays where holiday_id=?`;
    pool.query(sql, [holiday_id], (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results[0]);
    });
  },
  updateHolidays: (data, callback) => {
    const sql = `update timesheetdb.holidays set date=?, day=?,festival=?,remark=? where holiday_id=?`;

    pool.query(
      sql,
      [data.date, data.day,data.festival,data.remark,data.holiday_id],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
};
