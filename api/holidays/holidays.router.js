const {
  create,
  getHolidays,
  getHolidaysById,
  updateHolidays,
} = require("./holidays.controller");
const { checkToken } = require("../../auth/tokenvalidation");

const router = require("express").Router();
router.post("/", checkToken, create);
router.get("/", checkToken, getHolidays);
router.get("/:holiday_id", checkToken, getHolidaysById);
router.patch("/", checkToken, updateHolidays);

module.exports = router;
