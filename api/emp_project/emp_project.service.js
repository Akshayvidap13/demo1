const pool = require("../../config/db.js");

module.exports = {
  create: (data, callback) => {
    const sql = `insert into timesheetdb.emp_project(project_id,manager_id,tech_lead_id,emp_no,created_at) values(?,?,?,?,NOW())`;
    pool.query(
      sql,
      [
        data.project_id,
        data.manager_id,
        data.tech_lead_id,
        data.emp_no,
        data.created_at,
      ],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getEmpProject: (callback) => {
    const sql = `select * from timesheetdb.emp_project`;
    pool.query(sql, [], (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },

  getEmpProjectById: (emp_project_id, callback) => {
    const sql = `select * from timesheetdb.emp_project where emp_project_id=?`;
    pool.query(sql, [emp_project_id], (error, results, fields) => {
      console.log("servicedata", results);
      if (error) {
        return callback(error);
      }
      return callback(null, results[0]);
    });
  },

  updateEmpProject: (data, callback) => {
    const sql = `update timesheetdb.emp_project set 
    project_id=?,
    manager_id=?,
    tech_lead_id=?, 
    updated_at=NOW()  
    where emp_no=?`;
    pool.query(
      sql,
      [data.project_id, data.manager_id, data.tech_lead_id, data.emp_no],
      (error, results, fields) => {
        // console.log("datas", results);
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
};
