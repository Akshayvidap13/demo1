const pool = require("../../config/db.js");

module.exports = {
  create: (data, callback) => {
    console.log("S Data", data);
    const sql = `insert into timesheetDB.dept_emp(emp_no,dept_id,from_date,created_at,updated_at) 
                  values(?,?,NOW(),NOW(),NOW())`;
    pool.query(sql, [data.emp_no, data.dept_id], (error, results, fields) => {
      if (error) {
        console.log(error);
        return callback(error);
      }
      return callback(null, results);
    });
  },
  getDepartmentEmployee: (callback) => {
    const sql = `select timesheetdb.dept_emp.dept_emp_id,timesheetdb.dept_emp.from_date, timesheetdb.dept_emp.to_date, timesheetdb.dept_emp.created_at, 
                  timesheetdb.dept_emp.updated_at, 
                  timesheetdb.employee_details.first_name,
                  timesheetdb.departments.dept_name
                  from timesheetdb.dept_emp 
                  JOIN timesheetdb.employee_details   
	                ON timesheetdb.dept_emp.emp_no=timesheetdb.employee_details.emp_no
                  JOIN timesheetdb.departments
                  ON timesheetdb.dept_emp.dept_id=timesheetdb.departments.dept_id`;
    pool.query(sql, [], (error, results, fields) => {
      if (error) {
        console.log(error);
        return callback(error);
      }
      return callback(null, results);
    });
  },
  getDepartmentEmployeeByNo: (dept_emp_id, callback) => {
    const sql = `select * from timesheetDB.dept_emp where dept_emp_id=?`;
    pool.query(sql, [dept_emp_id], (error, results, fields) => {
      if (error) {
        console.log(error);
        return callback(error);
      }
      return callback(null, results[0]);
    });
  },
  updateDepartmentEmployee: (data, callback) => {
    const sql = `update timesheetdb.dept_emp set emp_no=?,dept_id=?, from_date=?, to_date=?,updated_at=NOW() 
            where dept_emp_id=?`;
    pool.query(
      sql,
      [
        data.emp_no,
        data.dept_id,
        data.from_date,
        data.to_date,
        data.dept_emp_id,
      ],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
};
