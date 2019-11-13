const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true
    },
    email: {
      type: String,
      require: true
    },
    adult: {
      type: Boolean,
      default: false
    }
  }
);

const User = mongoose.model('users', userSchema);

module.exports = User;
