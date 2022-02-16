const mongoose = require("mongoose")


const citySchema = mongoose.Schema(
  {

    _id: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    pop: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
   
    loc: {
      type:Array,
      required:true
    },

  },
  {
    timestamps: true,
  }
)

const City = mongoose.model('city', citySchema)

module.exports = City;