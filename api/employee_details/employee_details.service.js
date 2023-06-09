const pool = require("../../config/db.js");

module.exports = {
  create: (data, callback) => {
    const sql = `insert into timesheetDB.employee_details(
      first_name,
      middle_name,
      last_name,
      personal_email_id,
      email_id,
      password,
      mobile_no,
      dept_id,
      type_of_employment,
      hire_date,
      date_of_birth,
      gender,
      address,
      qualification,
      marital_status,
      emergency_contact_name,
      emergency_contact_no,
      blood_group,
      nationality,
      created_at,
      updated_at,
      role,
      city,
      country,
      zipcode
      ) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,NOW(),NOW(),?,?,?,?)`;
    pool.query(
      sql,
      [
        data.first_name,
        data.middle_name,
        data.last_name,
        data.personal_email_id,
        data.email_id,
        data.password,
        data.mobile_no,
        data.dept_id,
        data.type_of_employment,
        data.hire_date,
        data.date_of_birth,
        data.gender,
        data.address,
        data.qualification,
        data.marital_status,
        data.emergency_contact_name,
        data.emergency_contact_no,
        data.blood_group,
        data.nationality,
        data.role,
        data.city,
        data.country,
        data.zipcode,
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
  getEmployee: (callback) => {
    const sql = `select * from employee_details`;
    pool.query(sql, [], (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },
  getEmployeeById: (emp_no, callback) => {
    const sql = "select * from timesheetDB.employee_details where emp_no=?";
    pool.query(sql, [emp_no], (error, results, fields) => {
      // console.log("service error results:-", results);
      // console.log("result len type:-", results);
      if (error) {
        return callback(error);
      }
      return callback(null, results[0]);
    });
  },
  getEmployeeByIdEmp: (emp_no, callback) => {
    const sql = `select emp_no, first_name, last_name, email_id,mobile_no,personal_email_id,address,city,country,zipcode,aboutme
       from timesheetDB.employee_details where emp_no =? `;
    pool.query(sql, [emp_no], (error, results, fields) => {
      // console.log("service error results:-", results);
      // console.log("result len type:-", results);
      if (error) {
        return callback(error);
      }
      return callback(null, results[0]);
    });
  },
  updateEmployee: (data, callback) => {
    console.log("update data service:-", data);
    const sql = `update timesheetdb.employee_details set 
      first_name=?,
      middle_name=?,
      last_name=?,
      personal_email_id=?,
      email_id=?,
      password=?,
      mobile_no=?,
      dept_id=?,
      type_of_employment=?,
      hire_date=?,
      date_of_birth=?,
      gender=?,
      address=?,
      qualification=?,
      marital_status=?,
      emergency_contact_name=?,
      emergency_contact_no=?,
      blood_group=?,
      nationality=?,
      updated_at=NOW(),
      role=?,
      city=?,
      country=?,
      zipcode=? where emp_no=?`;
    pool.query(
      sql,
      [
        data.first_name,
        data.middle_name,
        data.last_name,
        data.personal_email_id,
        data.email_id,
        data.password,
        data.mobile_no,
        data.dept_id,
        data.type_of_employment,
        data.hire_date,
        data.date_of_birth,
        data.gender,
        data.address,
        data.qualification,
        data.marital_status,
        data.emergency_contact_name,
        data.emergency_contact_no,
        data.blood_group,
        data.nationality,
        data.role,
        data.city,
        data.country,
        data.zipcode,
        data.emp_no,
      ],
      (error, results, fields) => {
        console.log("Error :", error);
        if (error) {
          return callback(error);
        } else if (results.affectedRows === 0) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  updateEmployeeEmp: (data, callback) => {
    const sql = `update timesheetdb.employee_details set 
    first_name=?,
    last_name=?,
    mobile_no=?,
    email_id=?,
    personal_email_id=?,
    address=?,
    city=?,
    country=?,
    zipcode=?,
    aboutme=?,
    profile_pic=?
     where emp_no=?`;
    pool.query(
      sql,
      [
        data.first_name,
        data.last_name,
        data.mobile_no,
        data.email_id,
        data.personal_email_id,
        data.address,
        data.city,
        data.country,
        data.zipcode,
        data.aboutme,
        data.profilepic,
        data.emp_no,
      ],
      (error, results, fields) => {
        console.log("Error :", error);
        if (error) {
          console.log("Service error:-", error);
          return callback(error);
        } else if (results.affectedRows === 0) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  login: (data, callback) => {
    console.log("Service Data:-", data);
    const sql = `select * from employee_details where email_id=?`;
    pool.query(sql, [data.email], (error, results, fields) => {
      console.log("SQL:-", sql);
      console.log("server result:-", results);
      if (error) {
        // console.log(error);
        return callback(error);
      }
      return callback(null, results);
    });
  },
};
