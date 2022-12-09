const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/multiple',()=>console.log("database connected"));

const User=require('./Users')

const run=async () =>{
  try {
    const user= new User({
      name:'sohan',
      age:27,
      email:'chaudhuree00@gmail.com',
      createdAt:new Date(),
      hobbies:['video games','badminton'],
      address:{
        street:"rabindra sarabor",
        road:9
      }

    })
    // await user.save()
    console.log(user);
  } catch (error) {
    console.log(error.message)
  }
}
run();