const {
  create,
  getWeeklyData,
  getWeeklyDataByID,
  updateWeeklyData,
} = require("./weekly_data.service");

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
  getWeeklyData: (req, res) => {
    getWeeklyData((error, results) => {
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
  getWeeklyDataByID: (req, res) => {
    const id = req.params.id;
    getWeeklyDataByID(id, (error, results) => {
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
  updateWeeklyData: (req, res) => {
    const body = req.body;
    updateWeeklyData(body, (error, results) => {
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
