const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/multiple',()=>console.log("database connected"));

const User=require('./Users')

const createUser=async () =>{
  try {
    const user= new User({
      name:'kabir',
      age:28,
      email:'myemail@gmail.com',
      createdAt:new Date(),
      updatedAt:new Date(),
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
createUser();


////////////////////////
//      find user
////////////////////////
const findUserById = async (userId) =>{
  const findedUser=await User.findById(userId);
  const anotherFind= await User.where("name").equals('sohan').select('age')

  console.log("▶ ➡ file: script.js:31 ➡ findUsers ➡ findedUser", findedUser);
  console.log("▶ ➡ file: script.js:36 ➡ findUserById ➡ anotherFind", anotherFind);
  
}
findUserById("6392dcb3ac2603bced10b5c2")