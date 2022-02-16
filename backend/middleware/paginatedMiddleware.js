const User = require("../models/userModel");

function paginationResults(model) {
  return async (req, res, next) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const results = {};
    if (endIndex < (await model.countDocuments().exec()) > 0) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }

    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    }

    try {
    //  results.results = await model.find().limit(limit).skip(startIndex).exec();
    //       res.paginationResults = results;
   
        if(res.results.length-1>=limit){
      res.paginationResults = res.results.slice(startIndex+1,endIndex+1)
        }else{
          res.paginationResults=res.results
        }
      res.json(res.paginationResults);
      
    // res.paginationResults = results;
      
      // if(results.results.length>0){
      //   res.paginationResults = results;
      // }
      // else{
      //     res.status(400).json({
      //         message:"no data left"
      //     })
      // }
     
    //   if(res.paginationResults.length<=0){
    //     res.status(400).json({
    //          message:"no data left"
    //    })
    //  }

      next();
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };
}
module.exports = paginationResults;
