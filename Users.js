const mongoose=require('mongoose')

const addressSchema=mongoose.Schema({
  street:String,
  road:Number
})
const userSchema= mongoose.Schema({
  name:String,
  age:Number,
  email:String,
  createdAt:Date,
  updatedAt:Date,
  hobbies:[String],
  address:addressSchema
})

module.exports=mongoose.model("UserData",userSchema)