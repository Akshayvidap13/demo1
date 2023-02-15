const pool = require("../../config/db.js");

module.exports = {
  create: (data, callback) => {
    const sql = `insert into timesheetDB.departments(dept_name,created_at,updated_at) values(?,NOW(),NOW())`;
    pool.query(
      sql,
      [data.dept_name, data.created_at, data.updated_at],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getDepartments: (callback) => {
    const sql = `select * from timesheetDB.departments`;
    pool.query(sql, [], (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },
  getDepartmentsByNo: (dept_no, callback) => {
    const sql = `select * from timesheetDB.departments where dept_id=?`;
    pool.query(sql, [dept_no], (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results[0]);
    });
  },
  updateDepartment: (data, callback) => {
    const sql = `update timesheetdb.departments set dept_name=?, updated_at=NOW() where dept_id=?`;

    pool.query(
      sql,
      [data.dept_name, data.dept_no],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
};
