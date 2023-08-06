const mongoose = require("mongoose");

const MongoClient = async () => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE_URI);
    console.log(`MongoDB connected to ${conn.connection.host}`);
  } catch (error) {
    console.log(`error : ${error.message}`);
    process.exit(1);
  }
};

module.exports = MongoClient;
