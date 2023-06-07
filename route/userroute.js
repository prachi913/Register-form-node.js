const { Router } = require("express");
// const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { usermodel } = require("../model/usermodel");

const userrouter = Router();

userrouter.get("/", async(req, res) => {
  try {
    const post = await usermodel.find();

    res.send(post);
  } catch (error) {
    res.send({ err: err.message });
  }
});

userrouter.post("/register", async (req, res) => {
  // const {
  //   firstname,
  //   lastname,
  //   email,
    
  //   country,
  //   state,
  //   city,
  //   gender,
  //   // password,
  
  //   dateOfBirth,
  // age,
  // } = req.body;
  // try {
  //   bcrypt.hash(email, 5, async (err, hash) => {
  //     // Store hash in your passwordword DB.
  //     const userer = new usermodel({
       
  //       firstname,
  //       lastname,
  //       email:hash,
  //       country,
  //       state,
  //       city,
  //       gender,
        
  //       // password:hash,
  //       dateOfBirth,
  //       age
  //     });
  //     await userer.save();
  //     res.send({ msg: "new user registered" });
  //   });
  // } catch (error) {
  //   res.send(error);
  // }

  try {
    const post = new usermodel(req.body);
    await post.save();
    res.send(post);
  } catch (error) {
    res.send({ err: err.message });
  }
});

// userrouter.get("/")

module.exports = {
  userrouter,
};
