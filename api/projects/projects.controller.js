const {
  create,
  getProjects,
  getProjectsById,
  updateProjects,
} = require("./projects.service");

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
  getProjects: (req, res) => {
    getProjects((error, results) => {
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
  getProjectsById: (req, res) => {
    const id = req.params.id;
    // console.log("params", id);
    getProjectsById(id, (error, results) => {
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
  updateProjects: (req, res) => {
    const body = req.body;
    // console.log("data", body);
    updateProjects(body, (error, results) => {
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
