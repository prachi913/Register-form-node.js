const { text } = require("express");
const mongoose = require("mongoose");




const usershema = mongoose.Schema({
  firstname: { type: String, require: true },
  lastname: { type: String, require: true },
  email: { type: String, require: true },

  country: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },

  gender: { type: String, required: true },
  // password: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  age: {
    type: String,
    required: true,
  },
});
const usermodel = mongoose.model("user", usershema);

module.exports = {
  usermodel,
};
