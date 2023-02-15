const {
  create,
  getTitles,
  getTitleByEmpno,
  updatetitle,
} = require("./titles.service");

module.exports = {
  create: (req, res) => {
    const body = req.body;
    console.log(body);
    create(body, (error, results) => {
      if (error) {
        console.log(error);
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

  getTitles: (req, res) => {
    getTitles((error, results) => {
      if (error)
        return res.status(500).json({
          success: 0,
          message: "No record found",
        });
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },

  getTitleByEmpno: (req, res) => {
    const id = req.params.id;
    console.log(id);
    getTitleByEmpno(id, (error, results) => {
      if (error) {
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
  updatetitle: (req, res) => {
    const body = req.body;
    updatetitle(body, (error, results) => {
      console.log(results);
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
    