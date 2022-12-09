const mongoose = require('mongoose')

// address schema
const addressSchema = mongoose.Schema({
  street: {
    type: String,
    lowercase: true
  },
  road: Number
})

// user schema
const userSchema = mongoose.Schema({
  name: String,
  age: {
    type: Number,
    min: 20,
    max: 36,
    validate: {
      validator: v => v % 2 === 0,
      message: props => `${porps.value} is not an even number`
    }
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
  address: addressSchema,
  bestfriend: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'UserData'
  }
})

// advanced part

//? methods 
userSchema.methods.sayHi = function () {
  // note:
  // aikhane obossoi function aivabei use korte hobe
  // arrow function dewa jabe na cz this er use ase
  console.log(`⭐⭐ hi, ${this.name}.. this is a methods`);
}

//? static 

userSchema.statics.findName = function (name) {
  return this.find({ name: new RegExp(name, 'i') })
}

// ? query 
userSchema.query.byName = function (name) {
  return this.where({ name: new RegExp(name, 'i') })
}

// Virtual attributes
userSchema.virtual('nameEmail').get(function () {
  console.log(`${this.name}: <${this.email}>`);
})

// another: 
// pre & post




// advanced part end


module.exports = mongoose.model("UserData", userSchema)