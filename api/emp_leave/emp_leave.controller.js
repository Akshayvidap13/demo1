const {
  create,
  getEmpLeaves,
  getEmpLeaveByNo,
  updateEmpLeave,
} = require("./emp_leave.service");

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
  getEmpLeaves: (req, res) => {
    getEmpLeaves((error, results) => {
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
  getEmpLeaveByNo: (req, res) => {
    const no = req.params.no;
    getEmpLeaveByNo(no, (error, results) => {
      if (error) {
        // console.log(error);
        return res.status(500).json({
          success: 0,
          message: "no record found",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  updateEmpLeave: (req, res) => {
    const body = req.body;
    updateEmpLeave(body, (error, results) => {
      if (error) {
        // console.log(error);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
};
