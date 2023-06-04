const mongoose = require("mongoose");




const usershema = mongoose.Schema({
  firstname: { type: String, require: true },
  lastname: { type: String, require: true },
  email: { type: String, require: true },

  country: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },

  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  dateOfBirth: { type: Date, required: true },
  age: {
    type: Number,
    required: true,
  },
});
const usermodel = mongoose.model("user", usershema);

module.exports = {
  usermodel,
};
