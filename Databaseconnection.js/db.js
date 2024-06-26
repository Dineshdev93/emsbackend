const mongoose = require("mongoose");
const colors = require("colors");

const DATABASE = process.env.DATABASE;
const Connectdb = async () => {
  try {
    const connection = await mongoose.connect(
      DATABASE,
      {
        useNewUrlParser: true,
      }
    );
    console.log(`Mongodb Connected Succesfully`.bgMagenta);
  } catch (error) {
    console.error(`Mongodb not connected ${error}`.bgRed);
    process.exit(1);
  }
};
module.exports = Connectdb;
