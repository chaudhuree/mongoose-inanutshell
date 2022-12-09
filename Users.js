const mongoose = require('mongoose')

const addressSchema = mongoose.Schema({
  street: {
    type: String,
    lowercase: true
  },
  road: Number
})
const userSchema = mongoose.Schema({
  name: String,
  age: {
    type: Number,
    min: 20,
    max: 36
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
    minLength: 10
  },
  createdAt: {
    type: Date,
    default: () => new Date(),
    immutable: true,
  },
  updatedAt: {
    type: Date,
    default: () => new Date()
  },
  hobbies: [String],
  address: addressSchema
})

module.exports = mongoose.model("UserData", userSchema)