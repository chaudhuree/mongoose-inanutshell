const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/multiple', () => console.log("database connected"));

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


  // find with query (return an array)
  // const anotherFind = await User.where("name").equals('sohan').limit(1).select('age')


  // populate🔽🔽
  // const anotherFind = await User.where("name").equals('sohan').limit(1)

  // // anotherFind[0].bestfriend = "6392dccf73970fa20c9ed12d"
  // await anotherFind[0].save()
  // const anotherFind = await User.where("name").equals('sohan').populate('bestfriend').limit(1)
  console.log("▶ ➡ file: script.js:31 ➡ findUsers ➡ findedUser", findedUser);
  // console.log("▶ ➡ file: script.js:36 ➡ findUserById ➡ anotherFind", anotherFind);

}
findUserById("6392dcb3ac2603bced10b5c2")