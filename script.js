const mongoose = require('mongoose')
//imp: sometime localhost do not work well. then have to use 127.0.0.1:27017
mongoose.connect('mongodb://localhost:27017/multiple', () => console.log("database connected"));    // multiple is the name of db

//docs: Mongo DB Database Connection atlas

// let URI="mongodb+srv://<username>:<password>@expresstaskmanager.grxys5y.mongodb.net/CRUD?retryWrites=true&w=majority" //CRUD is the name of db 
//expresstaskmanager cluster name
// ;
// let OPTION={user:'usercrud',pass:'usercrud',autoIndex:true}
// mongoose.connect(URI,OPTION,(error)=>{
//     console.log("Connection Success")
//     console.log(error)
// })

const User = require('./Users')

const createUser = async () => {
  try {
    const user = new User({
      name: 'kabir',
      age: 28,
      email: 'myemail@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date(),
      hobbies: ['video games', 'badminton'],
      address: {
        street: "rabindra sarabor",
        road: 9
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
const findUserById = async (userId) => {
  const findedUser = await User.findById(userId);
  findedUser.sayHi()


  // note:
  // find with query (return an array)
  // const anotherFind = await User.where("name").equals('sohan').limit(1).select('age')


  //imp: 
  // populate🔽🔽
  // const anotherFind = await User.where("name").equals('sohan').limit(1)

  // // anotherFind[0].bestfriend = "6392dccf73970fa20c9ed12d"
  // await anotherFind[0].save()
  // const anotherFind = await User.where("name").equals('sohan').populate('bestfriend').limit(1)
  console.log("▶ ➡ file: script.js:31 ➡ findUsers ➡ findedUser", findedUser);
  // console.log("▶ ➡ file: script.js:36 ➡ findUserById ➡ anotherFind", anotherFind);

}
findUserById("6392dcb3ac2603bced10b5c2")

  // com: 
  // test advanced concept

const advancedTesting = async () => {
  const staticMethodUser = await User.findName("kabir")

  //doc: 
  // it is direct method 

  console.log("▶ ➡ file: script.js:58 ➡ advancedTesting ➡ user", staticMethodUser);
  const queryMethodUser = await User.where().byName("sohan")

  //doc: 
  // call it with query like where or find 

  console.log("▶ ➡ file: script.js:60 ➡ advancedTesting ➡ anotherUser", queryMethodUser);

  //note: Virtual attributes 

  console.log('nameEmail')
  queryMethodUser[0].nameEmail

}

advancedTesting()

// imp: 
// pre and post
console.log('pre and post 🔽🔽')
const testPrePosts = async () => {
  const userFindOne = await User.findOne({ name: 'kabir' })
  console.log("▶ ➡ file: script.js:76 ➡ testPrePosts ➡ userFindOne", userFindOne);

  userFindOne.save()
}
testPrePosts()
