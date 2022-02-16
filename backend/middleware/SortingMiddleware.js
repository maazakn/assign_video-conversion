// function SortingResults(model) {
//   return async (req, res, next) => {
//     const criteria = req.query.criteria;
//     const param = req.query.param;
//     if (param == "pop" ) {
//       let cities = await model.find({});

//       const newCities = cities.map((city) => {
//         let pop = parseInt(city.pop);
//         let newobj = {
//           _id: city._id,
//           city: city.city,
//           loc: city.loc,
//           pop: pop,
//           state: city.state,
//         };
//         return newobj;
//       });

//       if (criteria == 1) {
//         let sorted = await newCities.sort((a, b) => a.pop - b.pop);
//         res.send(sorted)
//         res.results = sorted;
//         next();
//       } else {
//         let sorted = await newCities.sort((a, b) => b.pop - a.pop);
//         res.results = sorted;
//         next();
//       }
//     } else {
//       if (criteria == 1) {
//         sorted = await model.find({}).sort({ [param]: 1 });
//         res.results = sorted;
//         next();
//       } else {
//         sorted = await model.find({}).sort({ [param]: -1 });
//         res.results = sorted;
//         next();
//       }
//     }
//   };
// }

// module.exports = SortingResults;
function SortingResults(model) {
  return async (req, res, next) => {
    const criteria = req.query.criteria;
    const param = req.query.param;

    if (res.results == 0) {
      if (param == "pop") {
        let cities = await model.find({});
        const newCities = cities.map((city) => {
          let pop = parseInt(city.pop);
          let newobj = {
            _id: city._id,
            city: city.city,
            loc: city.loc,
            pop: pop,
            state: city.state,
          };
          return newobj;
        });
        if (criteria == 1) {
          let sorted = await newCities.sort((a, b) => a.pop - b.pop);
          //res.send(sorted)
          res.results = sorted;
          next();
        } else {
          let sorted = await newCities.sort((a, b) => b.pop - a.pop);
          res.results = sorted;
          next();
        }
      } else {
        if (criteria == 1) {
          sorted = await model.find({}).sort({ [param]: 1 });
          res.results = sorted;

          next();
        } else {
          sorted = await model.find({}).sort({ [param]: -1 });
          res.results = sorted;
          next();
        }
      }
    }
    next();
  };
}
module.exports = SortingResults;
