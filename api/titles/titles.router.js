const {
  create,
  getTitles,
  getTitleByEmpno,
  updatetitle,
} = require("./titles.controller");

const router = require("express").Router();
router.post("/", create);
router.get("/", getTitles);
router.get("/:id", getTitleByEmpno);
router.patch("/", updatetitle);

module.exports = router;
