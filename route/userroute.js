const { Router } = require("express");
// const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { usermodel } = require("../model/usermodel");

const userrouter = Router();

userrouter.get("/", (req, res) => {
  res.send("hi");
});

userrouter.post("/register", async (req, res) => {
  const {
    firstname,
    lastname,
    email,
    password,
    country,
    state,
    city,
    gender,
    dateOfBirth,
  age,
  } = req.body;
  try {
    bcrypt.hash(email, 5, async (err, hash) => {
      // Store hash in your passwordword DB.
      const userer = new usermodel({
       
        firstname,
        lastname,
        email,
        country,
        state,
        city,
        gender,
        dateOfBirth,
        age
      });
      await userer.save();
      res.send({ msg: "new user registered" });
    });
  } catch (error) {
    res.send(error);
  }
});


module.exports = {
  userrouter,
};
