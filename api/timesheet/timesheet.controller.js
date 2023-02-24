const {
  create,
  getTimesheet,
  getTimesheetById,
  updateTimesheet,
} = require("./timesheet.service");

module.exports = {
  create: (req, res) => {
    const body = req.body;
    // console.log(body);
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
  getTimesheet: (req, res) => {
    getTimesheet((error, results) => {
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
  getTimesheetById: (req, res) => {
    const id = req.params.id;
    // console.log("params", id);
    getTimesheetById(id, (error, results) => {
      if (error) {
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
  updateTimesheet: (req, res) => {
    const body = req.body;
     console.log("data", body);
    updateTimesheet(body, (error, results) => {
      console.log(body);
      if (error) {
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
