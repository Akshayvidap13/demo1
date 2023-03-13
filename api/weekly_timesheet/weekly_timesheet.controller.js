const {
  create,
  getTimesheet,
  getTimesheetById,
  updateTimesheet,
  getTimesheetByWId,
  updateStatus,
  getTimesheetEmployeeByID,
} = require("./weekly_timesheet.service");

module.exports = {
  create: (req, res) => {
    const body = req.body;
    console.log(body);
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
      console.log("Data", results);
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
    const data = req.params;
    console.log("Params:-", req.params);

    getTimesheetById(data, (error, results) => {
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
  getTimesheetEmployeeByID: (req, res) => {
    const data = req.params;
    console.log("Params:-", req.params);

    getTimesheetEmployeeByID(data, (error, results) => {
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

  getTimesheetByWId: (req, res) => {
    const id = req.params.id;
    // console.log("params", id);
    getTimesheetByWId(id, (error, results) => {
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
      console.log("contoller body:-", body);
      console.log("contoller result:-", results);
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

  updateStatus: (req, res) => {
    const body = req.body;
    console.log("data", body);
    updateStatus(body, (error, results) => {
      console.log("contoller body:-", body);
      console.log("contoller result:-", results);
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
