const dotenv = require('dotenv')
const dotenvExpand = require('dotenv-expand')
const myEnv = dotenv.config()

dotenvExpand.expand(myEnv)

const mongoose = require("mongoose")
const mongoURI = process.env.VITE_MONOGO_URI;


const connectToMongoDB = async () => {

  if (await mongoose.connect(mongoURI)) {
    console.log("Connection Successfull")
  }

}

module.exports = connectToMongoDB

