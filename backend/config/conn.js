const mongoose= require("mongoose")
const connectDB = async () => {
    try {
      const conn = await mongoose.connect("mongodb+srv://dbUser:dbUser@cluster0.8byrd.mongodb.net/test?retryWrites=true&w=majority", {
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:true,
        useUnifiedTopology: true
      })
  
      console.log("MongoDB Connected")
    } catch (error) {
      console.error(`Error: ${error.message}`)
      process.exit(1)
    }
  }
  
module.exports = connectDB;