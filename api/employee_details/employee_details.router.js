const {
  create,
  getEmployee,
  getEmployeeById,
  updateEmployee,
  login,
  updateEmployeeEmp,
  getEmployeeByIdEmp,
} = require("./employee_details.controller");
const { checkToken } = require("../../auth/tokenvalidation");
const multer = require("multer");

const upload = multer({ dest: "uploads/" }).single("profilepic");

const router = require("express").Router();
router.post("/login", login);
router.post("/", create);
router.get("/", getEmployee);
router.get("/:id", getEmployeeById);
router.patch("/", updateEmployee);
router.patch("/emp", updateEmployeeEmp);
router.get("/emp/:id", getEmployeeByIdEmp);
router.patch("/emp", upload, updateEmployeeEmp);
// router.patch("/emp", upload, (req, res) => {
//   const { first_name } = req.body;
//   console.log("In controller first_name:-", first_name);
//   updateEmployeeEmp(first_name, (error, results) => {
//     if (error) {
//       return res.status(500).json({
//         success: 0,
//         message: "Database connection error",
//       });
//     } else if (results.affectedRows === 0) {
//       return res.status(404).json({
//         success: 0,
//         message: "Record not found",
//       });
//     }
//     return res.status(200).json({
//       success: 1,
//       data: results,
//     });
//   });
// });

module.exports = router;
