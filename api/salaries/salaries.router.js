const {
  create,
  getSalaries,
  getSalariesByNo,
  updateSalary,
} = require("./salaries.controller");

const router = require("express").Router();
router.post("/", create);
router.get("/", getSalaries);
router.get("/:no", getSalariesByNo);
router.patch("/", updateSalary);

module.exports = router;
