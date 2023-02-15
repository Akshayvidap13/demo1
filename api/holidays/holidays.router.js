const {
  create,
   getHolidays,
   getHolidaysById,
  updateHolidays,
} = require("./holidays.controller");

const router = require("express").Router();
router.post("/", create);
 router.get("/", getHolidays);
 router.get("/:holiday_id", getHolidaysById);
router.patch("/", updateHolidays);

module.exports = router;
