const pool = require("../../config/db.js");

module.exports = {
  create: (data, callback) => {
    // console.log("Serv data:-", data);
    const sql = `insert into timesheetdb.projects(
      project_name,
      client_name,
      about_project,
      project_start_date,
      project_manager,
      project_lead,
      created_at,
      dept_id
      ) values(?,?,?,?,?,?,NOW(),?)`;
    pool.query(
      sql,
      [
        data.project_name,
        data.client_name,
        data.about_project,
        data.project_start_date,
        data.project_manager,
        data.project_lead,
        data.dept_id,
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
  getProjects: (callback) => {
    const sql = `SELECT projects.*, departments.dept_name FROM projects 
                JOIN  departments ON projects.dept_id=departments.dept_id `;
    pool.query(sql, [], (error, results, fields) => {
      if (error) {
        return callback(error);
      }

      return callback(null, results);
    });
  },
  getProjectsById: (project_id, callback) => {
    const sql = `SELECT projects.*, departments.dept_name FROM projects 
                JOIN  departments ON projects.dept_id=departments.dept_id where project_id=?`;
    pool.query(sql, [project_id], (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results[0]);
    });
  },
  updateProjects: (data, callback) => {
    const sql = `update timesheetdb.projects set 
    project_name=?,
    client_name=?,
    about_project=?,
    project_start_date=?,
    project_end_date=?,
    project_manager=?,
    project_lead=?,
    project_remark=?,
    updated_at=NOW(),
    dept_id=?
    where project_id=?`;
    pool.query(
      sql,
      [
        data.project_name,
        data.client_name,
        data.about_project,
        data.project_start_date,
        data.project_end_date,
        data.project_manager,
        data.project_lead,
        data.project_remark,
        data.dept_id,
        data.project_id,
      ],

      (error, results, fields) => {
        // console.log(error, results);
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
};
