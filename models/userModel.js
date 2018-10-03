const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  updated_at: {
    type: Date,
    default: Date.now()
  }
})

module.exports = User = mongoose.model('users', UserSchema)