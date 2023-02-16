const {
  create,
  getEmployee,
  getEmployeeById,
  updateEmployee,
  login,
} = require("./employee_details.service");
const { genSalt, hashSync, compareSync } = require("bcryptjs");
const { genSaltSync } = require("bcrypt");
require("dotenv").config();
const { sign } = require("jsonwebtoken");

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
  updateEmployee: (req, res) => {
    const body = req.body;
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
  },
  login: (req, res) => {
    const body = req.body;
    login(body, (error, results) => {
      if (error) {
        console.log(err);
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
      console.log("cont error:-", error);
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
