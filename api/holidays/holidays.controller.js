const { create ,getHolidays,getHolidaysById,updateHolidays} = require("./holidays.service");

module.exports = {
  create: (req, res) => {
    const body = req.body;
    console.log(body.leave_name);
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
  getHolidays: (req, res) => {
    getHolidays((error, results) => {
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
  getHolidaysById: (req, res) => {
    const no = req.params.holiday_id;
    getHolidaysById(no, (error, results) => {
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
  updateHolidays: (req, res) => {
    const body = req.body;
    updateHolidays(body, (error, results) => {
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
