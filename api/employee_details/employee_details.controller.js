const {
  create,
  getEmployee,
  getEmployeeById,
  updateEmployee,
  updateEmployeeEmp,
  getEmployeeByIdEmp,
  login,
} = require("./employee_details.service");
const { genSalt, hashSync, compareSync } = require("bcryptjs");
const { genSaltSync } = require("bcrypt");
require("dotenv").config();
const { sign } = require("jsonwebtoken");
const multer = require("multer");
const mkdirp = require("mkdirp");
const moment = require("moment");

// img storage confing
const imgconfig = multer.diskStorage({
  destination: (req, file, callback) => {
    // Create the destination folder if it doesn't exist
    mkdirp("../uploads", (err) => callback(err, "../uploads"));
  },
  filename: (req, file, callback) => {
    callback(null, `image-${Date.now()}.${file.originalname}`);
  },
});
// img filter
const isImage = (req, file, callback) => {
  if (file.mimetype.startsWith("image")) {
    callback(null, true);
  } else {
    callback(null, Error("Only images are allowed"));
  }
};

const upload = multer({
  storage: imgconfig,
  fileFilter: isImage,
}).single("profilepic");

module.exports = {
  create: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    create(body, (error, results) => {
      if (error) {
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
  getEmployee: (req, res) => {
    getEmployee((error, results) => {
      console.log("Res:-", results);
      console.log("Contorller error:-", error);
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
  getEmployeeById: (req, res) => {
    const id = req.params.id;
    getEmployeeById(id, (error, results) => {
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
  getEmployeeByIdEmp: (req, res) => {
    const id = req.params.id;
    getEmployeeByIdEmp(id, (error, results) => {
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
  updateEmployee:
    (upload,
    (req, res) => {
      const body = req.body;
      const salt = genSaltSync(10);
      body.password = hashSync(body.password, salt);
      console.log("Controler Body:-", body);
      console.log("Res file:-", res.file);
      updateEmployee(body, (error, results) => {
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
    }),
  updateEmployeeEmp:
    (upload,
    (req, res) => {
      const { empData } = req.body;
      console.log("In controller");
      console.log("Controller EmpData:-", empData);
      // console.log("Controler Body REQ:-", JSON.parse(empData));
      console.log("Res file:-", req.files);
      updateEmployeeEmp(body, (error, results) => {
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
    }),
  login: (req, res) => {
    const body = req.body;
    console.log("Conto data:-", body);
    login(body, (error, results) => {
      // console.log("Controller Re")
      if (error) {
        // console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Connection not established",
        });
      }
      if (!results) {
        return res.status(404).json({
          success: 0,
          message: "Email not found",
        });
      }
      console.log("cont Result:-", results);
      console.log("Con Results Password:-", results[0]);
      const result = compareSync(body.password, results[0].password);
      console.log("Compare result:-", result);
      if (result) {
        results.password = undefined;
        const jsonToken = sign({ result: results }, "ABCTest", {
          expiresIn: "1h",
        });
        res.status(200).json({
          success: 1,
          message: "login Successful",
          emp_no: results[0].emp_no,
          token: jsonToken,
        });
      } else {
        res.status(500).json({
          success: 0,
          message: "Invalid password",
        });
      }
    });
  },
};
