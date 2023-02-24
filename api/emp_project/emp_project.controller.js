const {
  create,
  getEmpProject,
  getEmpProjectById,
  updateEmpProject,
} = require("./emp_project.service");

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
  getEmpProject: (req, res) => {
    getEmpProject((error, results) => {
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

  getEmpProjectById: (req, res) => {
    const id = req.params.id;
    getEmpProjectById(id, (error, results) => {
      console.log("data", results);
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
  updateEmpProject: (req, res) => {
    const body = req.body;
    console.log("controller body", body);
    updateEmpProject(body, (error, results) => {
      console.log("controller result",results);
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
};
