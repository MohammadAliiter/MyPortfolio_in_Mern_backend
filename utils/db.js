const mongoose = require('mongoose');

//const URI = 'mongodb://127.0.0.1:27017/employee';

const URI = process.env.MONGODB_URI;

//mongoose.connect(URI);

const connectDb = async ()=>{
    try{
          await mongoose.connect(URI);
        console.log("database connected successfull");

    }
    catch(errore){
      console.error("database connection failed");
      process.exit(0);
    }
}

module.exports = connectDb;

