const {
  create,
  getEmployee,
  getEmployeeById,
  updateEmployee,
} = require("./employee_details.service");

module.exports = {
  create: (req, res) => {
    const body = req.body;
    create(body, (error, results) => {
      if (error) {
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
  getEmployee: (req, res) => {
    getEmployee((error, results) => {
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
  getEmployeeById: (req, res) => {
    const id = req.params.id;
    getEmployeeById(id, (error, results) => {
      if (error || results === undefined) {
        return res.status(500).json({
          success: 0,
          message: "No record found",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  updateEmployee: (req, res) => {
    const body = req.body;
    updateEmployee(body, (error, results) => {
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
