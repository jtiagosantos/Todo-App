require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Mongodb successfully connected!'))
  .catch(err => console.log(`Error connecting with Mongodb!\n ${err}`));