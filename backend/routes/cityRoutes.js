// const express  = require("express");
// const { cityData, cityHighestPop} = require("../controllers/cityControllers");
// const paginationResults = require("../middleware/paginatedMiddleware");
// const SortingResults = require("../middleware/SortingMiddleware");
// const City = require("../models/cityModel");
// const protect = require("../middleware/authmiddleware");
// const  SearchingResults = require("../middleware/SearchingMiddleware")
// const FilterResult = require("../middleware/FilterMiddleware")

// const router = express.Router();

// router.route("/").get(cityData);

// router.route("/highestpop").get(cityHighestPop);

// router.get("/pagination", paginationResults(City), (req, res) => {
//     res.json(res.paginationResults);
//   });
//   router.get("/sorting", SortingResults(City),paginationResults(City), (req, res) => {
//     res.json(res.paginationResults);
//   });

//   router.get("/searching",SearchingResults(City),paginationResults(City), (req, res) => {
//     res.json(res.paginationResults);
//   });

//   router.get("/filtering",FilterResult(City),paginationResults(City), (req, res) => {
//     res.json(res.paginationResults);
//   });

// module.exports = router;
const express = require("express");
const { cityData, cityHighestPop } = require("../controllers/cityControllers");
const paginationResults = require("../middleware/paginatedMiddleware");
const SortingResults = require("../middleware/SortingMiddleware");
const City = require("../models/cityModel");
const protect = require("../middleware/authmiddleware");
const SearchingResults = require("../middleware/SearchingMiddleware");
const FilterResult = require("../middleware/FilterMiddleware");
const router = express.Router();
// router.route("/").get(cityData);
router.route("/highestpop").get(cityHighestPop);
router.get("/pagination", paginationResults(City), (req, res) => {
  res.json(res.paginationResults);
});
router.get(
  "/sorting",
  SortingResults(City),
  paginationResults(City),
  (req, res) => {
    res.json(res.paginationResults);
  }
);
router.get(
  "/searching",
  SearchingResults(City),
  paginationResults(City),
  (req, res) => {
    res.json(res.paginationResults);
  }
);
router.get(
  "/filtering",
  FilterResult(City),
  paginationResults(City),
  (req, res) => {
   
    res.json(res.paginationResults);
  }
);
router.get(
  "/check",
  SearchingResults(City),
  FilterResult(City),
  SortingResults(City),
  paginationResults(City),
  (req, res) => {

  
  }
);
module.exports = router;
