// const User = require("../models/userModel");

// function FilterResult(model) {
//   return async (req, res, next) => {
//     let minrange = req.query.min;
//     let maxrange = req.query.max;
//     let cities = await model.find({});
//     const newCities= cities.map(city=>{
//        let pop =parseInt(city.pop)

//       let newobj={
//         _id:city._id,
//         city:city.city,
//         loc:city.loc,
//         pop:pop,
//         state:city.state
//       }
//       return newobj;
//      }
//      )
//      if(minrange<=maxrange){
//       let filtered = newCities.filter(city=>(city.pop>=minrange && city.pop<=maxrange))
    
//       res.results = filtered;
//       next();
//      }
//      else{
//        res.status(404).json({
//          message:"No record found"
//        })
//      }

//   };
// }

// module.exports = FilterResult;
const User = require("../models/userModel");
function FilterResult(model) {
  return async (req, res, next) => {
    let minrange = req.query.min;
    let maxrange = req.query.max;
    let cities = await model.find({});
    const newCities= cities.map(city=>{
       let pop =parseInt(city.pop)
      let newobj={
        _id:city._id,
        city:city.city,
        loc:city.loc,
        pop:pop,
        state:city.state
      }
      return newobj;
     }
     )
    
     if((minrange!=0||maxrange!=0)){
     if(minrange<=maxrange){
      let filtered = newCities.filter(city=>(city.pop>=minrange && city.pop<=maxrange))
      res.results = filtered;
      next();
     }
     else{
       res.status(404).json({
         message:"No record found"
       })
     }}
     else{
 
     
    }
    next();
  };
}
module.exports = FilterResult;
