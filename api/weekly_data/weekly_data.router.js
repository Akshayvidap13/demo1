const {
  create,
  getWeeklyData,
  getWeeklyDataByID,
  updateWeeklyData,
} = require("./weekly_data.controller");

const router = require("express").Router();
router.post("/", create);
router.get("/", getWeeklyData);
router.get("/:no", getWeeklyDataByID);
router.patch("/", updateWeeklyData);

module.exports = router;
