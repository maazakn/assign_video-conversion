
const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");
//@desc    Auth user & get token
//@route   POST /api/users/login
//@access  Public
 const authUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email: email,password:password });
    if (user) {
      return res.status(200).json({
        status: "success",
        data: {
          id: user._id,
          email: user.email,
          token: generateToken(user._id),
        },
      });
    } else {
      res.status(400).json({
        status: false,
        message: "Invalid username or password ",
      });
    }
  } catch (e) {
    console.log("Exception", e);
  }
};



 const userProfile = async (req, res) => {
  res.send("good")
 
};
const signup = async (req, res) => {
 try {
    const { name, email, password } = req.body;
    let userExists = await User.findOne({ email: email });
    if (userExists) {
      res.send({
        status: false,
        message: "User already exist",
      });
    }

    // const salt = bcrypt.genSaltSync(10);
    // const hashpassword = bcrypt.hashSync(password, salt);
    const user = await User.create({
      name,
      email,
      password,
    });
    if (user) {
      res.send({
        status: "success",
        data: {
          id: user._id,
          name: user.name,
          email: user.email,
          token: generateToken(user._id),
        },
      });
    } else {
      res.send({
        status: false,
        message: "Invalid user data",
      });
    }
  } catch (e) {
    console.log("Exception", e);
  }
};

module.exports = {authUser,signup,userProfile}