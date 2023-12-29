// // routes/offenderRoutes.js

// const express = require("express");
// const router = express.Router();
// const offenderController = require("../controller/offenders.controller");

// router.post("/addoffenders", offenderController.addOffender);
// router.get("/offenders", (req, res) => {
//   console.log("hey offenders");
// });
// router.get("/offenders/search", offenderController.searchOffenders);
// router.get("/offenders/visitors", offenderController.searchVisitors);
// module.exports = router;


const express = require("express");
const router = express.Router();
const Offender = require("../model/Offender");
const OffenderController = require("../controller/offenders.controller");

router.post("/addOffender", OffenderController.offenderData);
router.get("/searchOffender", async (req, res) => {
  const searchQuery = req.query.name; // You should pass the 'name' as a query parameter
  const results = await Offender.find({ name: searchQuery });
  res.json(results);
  console.log(results);
});
router.get("/searchVisitor", async (req, res) => {
  const searchQuery = req.query.name; // You should pass the 'name' as a query parameter
  const results = await Offender.find({ name: searchQuery });
  res.json(results);
  console.log(results);
});


module.exports = router;


