const {
  create,
  getLeaves,
  getLeaveByNo,
  updateLeave,
} = require("./leaves.service");

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
  getLeaves: (req, res) => {
    getLeaves((error, results) => {
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
  getLeaveByNo: (req, res) => {
    const no = req.params.no;
    getLeaveByNo(no, (error, results) => {
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
  updateLeave: (req, res) => {
    const body = req.body;
    updateLeave(body, (error, results) => {
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
