const {
  create,
  getDepartmentEmployee,
  getDepartmentEmployeeByNo,
  updateDepartmentEmployee,
  getDepartmentEmployeeByName,
} = require("./dept_emp.service");

module.exports = {
  create: (req, res) => {
    const body = req.body;
    create(body, (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({
          success: 0,
          message: "Database connection Error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getDepartmentEmployee: (req, res) => {
    getDepartmentEmployee((error, results) => {
      if (error)
        return res.status(500).json({
          success: 0,
          message: "No records found",
        });
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getDepartmentEmployeeByNo: (req, res) => {
    const dept_emp_id = req.params.dept_emp_id;
    console.log("params", dept_emp_id);
    getDepartmentEmployeeByNo(dept_emp_id, (error, results) => {
      if (error) {
        return res.status(500).json({
          success: 0,
          message: "Database Connection Error",
        });
      } else if (results === undefined) {
        return res.status(404).json({
          success: 0,
          message: "Record not found",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  updateDepartmentEmployee: (req, res) => {
    const body = req.body;
    updateDepartmentEmployee(body, (error, results) => {
      console.log("Controller results:", results);
      if (error) {
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      } else if (results.affectedRows === 0) {
        return res.status(404).json({
          success: 0,
          message: "Record not found",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getDepartmentEmployeeByName: (req, res) => {
    const name = req.params.name;
    getDepartmentEmployeeByName(name, (error, results) => {
      console.log(results);
      if (error) {
        return res.status(500).json({
          success: 0,
          message: "No record found",
        });
      }
      console.log(results);
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
};
