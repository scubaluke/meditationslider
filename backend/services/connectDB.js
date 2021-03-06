const mongoose = require('mongoose');
require('colors');

module.exports = async () => {
  try {
    const conn = await mongoose.connect(process.env.mongoURI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`.magenta.bold.bgBlue);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

