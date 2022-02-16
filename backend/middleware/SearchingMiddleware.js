// const User = require("../models/userModel");

// function SearchingResults(model) {
//   return async (req, res, next) => {
//     let field = req.query.field;
//     // let searchingfield = req.query.searchingfield
//     let searched = await model.find( {city : {$regex: `${field}`, $options: 'i'}},)
//     res.results = searched;
//     next();
//   };
// }
// module.exports = SearchingResults;

const User = require("../models/userModel");
function SearchingResults(model) {
  return async (req, res, next) => {
    let field = req.query.field;
    if(field!=''){
    // let searchingfield = req.query.searchingfield
    let searched = await model.find( {city : {$regex: `${field}`, $options: 'i'}},)
    res.results = searched;
  }
    else{
      res.results =0;
    }
    next();
  };
}
module.exports = SearchingResults;