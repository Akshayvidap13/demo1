const {
  create,
  getDepartments,
  getDepartmentsByNo,
  updateDepartment,
} = require("./departments.service");

module.exports = {
  create: (req, res) => {
    const body = req.body;
    //console.log(body.leave_name);
    create(body, (error, results) => {
      if (error) {
        // console.log(error);
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
  getDepartments: (req, res) => {
    getDepartments((error, results) => {
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
  getDepartmentsByNo: (req, res) => {
    const no = req.params.dept_no;
    getDepartmentsByNo(no, (error, results) => {
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
  updateDepartment: (req, res) => {
    const body = req.body;
    updateDepartment(body, (error, results) => {
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
};
