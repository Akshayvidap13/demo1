const {
  create,
  getEmpLeaves,
  getEmpLeaveByNo,
  updateEmpLeave,
  getEmpLeavesGroupBy,
  getEmpLeavesByDate,
} = require("./emp_leave.service");

module.exports = {
  create: (req, res) => {
    const body = req.body;
    console.log("leavecont", body);
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
  getEmpLeavesGroupBy: (req, res) => {
    console.log("In controller:-");
    const emp_no = req.params.emp_no;
    const status = req.params.status;
    console.log("Controller emp_no:-", emp_no, status);
    getEmpLeavesGroupBy(emp_no, status, (error, results) => {
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
  getEmpLeavesByDate: (req, res) => {
    console.log("In controller:-");
    const data = req.params;
    console.log("Controller data:-", data);
    getEmpLeavesByDate(data, (error, results) => {
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
  updateEmpLeave: (req, res) => {
    const body = req.body;
    console.log("cbody", body);
    updateEmpLeave(body, (error, results) => {
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
