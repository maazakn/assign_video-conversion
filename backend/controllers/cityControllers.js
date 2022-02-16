const City = require("../models/cityModel");
const generateToken = require("../utils/generateToken");

const cityData = async (req, res) => {
  try {
    let city = await City.find({});

    if (city) {
      return res.json({
        status: "success",
        city,
      });
    }
  } catch (e) {
    console.log("Exception", e);
  }
};

const cityHighestPop = async (req, res) => {
  try {
      let cities = await City.find({});
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

      
      
      let finalCities = (newCities.sort((a,b)=>b.pop-a.pop)).slice(0,20);
      return res.json({
        status: "success",
        finalCities,
      });
    
  } catch (e) {
    console.log("Exception", e);
  }
};



module.exports = { cityData, cityHighestPop };
