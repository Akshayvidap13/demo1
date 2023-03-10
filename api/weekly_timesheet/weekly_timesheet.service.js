const pool = require("../../config/db");

module.exports = {
  create: (data, callback) => {
    console.log("Service  Data", data);
    const sql = `insert into timesheetdb.weekly_timesheet(
        emp_no,
        totalhours,
        hours,
        project_id,
        status,
        approved_by,
        reason,
        remark,
        overtime,
        day,
        date,
        created_at) 
        values(?,?,?,?,?,?,?,?,?,?,?,NOW())`;
    pool.query(
      sql,
      [
        data.emp_no,
        data.totalhours,
        data.hours,
        data.project_id,
        data.status,
        data.approved_by,
        data.reason,
        data.remark,
        data.overtime,
        data.day,
        data.date,
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
  getTimesheet: (callback) => {
    const sql = `select timesheetdb.weekly_timesheet.*,
                timesheetdb.projects.project_name   
                from timesheetdb.weekly_timesheet join timesheetdb.projects
                on  timesheetdb.weekly_timesheet.project_id=timesheetdb.projects.project_id`;
    pool.query(sql, [], (error, results, fields) => {
      console.log("sdata=>", results);
      if (error) {
        console.log(error);
        return callback(error);
      }
      console.log("result", results);
      return callback(null, results);
    });
  },
  getTimesheetById: (data, callback) => {
    data.from_date = data.from_date.trim();
    data.to_date = data.to_date.trim();
    // const sql = `select timesheetdb.weekly_timesheet.*,
    //               timesheetdb.projects.project_name
    //               from timesheetdb.weekly_timesheet join timesheetdb.projects
    //               on  timesheetdb.weekly_timesheet.project_id=timesheetdb.projects.project_id where emp_no=?`;
    const sql = `SELECT weekly_timesheet.*, projects.project_name
                  FROM timesheetdb.weekly_timesheet
                  JOIN timesheetdb.projects ON weekly_timesheet.project_id = projects.project_id
                  WHERE emp_no =? AND weekly_timesheet.date BETWEEN ? AND ? AND
                  weekly_timesheet.status IS NULL;`;

    pool.query(
      sql,
      [data.emp_no, data.from_date, data.to_date],

      (error, results, fields) => {
        console.log("Service SQL:-", sql);
        console.log(" Service error:-", error);
        console.log("Service Result:-", results);
        if (error) {
          console.log(error);
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  getTimesheetByWId: (weekly_id, callback) => {
    const sql = `select timesheetdb.weekly_timesheet.*,
                  timesheetdb.projects.project_name   
                  from timesheetdb.weekly_timesheet join timesheetdb.projects
                  on  timesheetdb.weekly_timesheet.project_id=timesheetdb.projects.project_id where weekly_timesheet_id=?`;
    pool.query(sql, [weekly_id], (error, results, fields) => {
      if (error) {
        console.log(error);
        return callback(error);
      }
      return callback(null, results);
    });
  },
  updateStatus: (data, callback) => {
    const sql = `update weekly_timesheet set weekly_timesheet.status=?,weekly_timesheet.updated_at=NOW()  where emp_no=? AND
	                      weekly_timesheet.date BETWEEN ? AND ?;`;
    pool.query(
      sql,
      [data.status, data.emp_no, data.from_date, data.to_date],
      (error, results, fields) => {
        console.log("Sql:-", sql);
        console.log("service error:-", error);
        console.log("results:-", results);
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  updateTimesheet: (data, callback) => {
    const sql = `update timesheetdb.weekly_timesheet set 
        totalhours=?,
        hours=?,
        project_id=?,
        status=?,
        approved_by=?,
        reason=?,
        remark=?,
        overtime=?,
        day=?,
        date=?,
        updated_at=NOW()
    where weekly_timesheet_id=?`;
    pool.query(
      sql,
      [
        data.totalhours,
        data.hours,
        data.project_id,
        data.status,
        data.approved_by,
        data.reason,
        data.remark,
        data.overtime,
        data.day,
        data.date,
        data.weekly_timesheet_id,
      ],
      (error, results, fields) => {
        console.log("Sql:-", sql);
        console.log("service error:-", error);
        console.log("results:-", results);
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
};
