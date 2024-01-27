const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  fullname: {
     type: String,
     required: true,
     trim: true,
     min: 3,
  },
  email: {
     type: String,
     required: true,
     trim: true,
     unique: true,
     lowercase: true,
  },
  hash_password: {
     type: String,
     required: true,
  },
  contactnumber: {
     type: String,
  },
 
},{ timestamps: true });

userSchema.method({
  async authenticate(password) {
     return bcrypt.compare(password, this.hash_password);
  },
});
module.exports = mongoose.model("User", userSchema);