const mongoose = require('mongoose');

const connectWithDB = ()=>{

    mongoose.connect(process.env.MONGO_URL)
    .then(()=>console.log("db connected"))
    .catch((err)=>{
        console.log("Issue in Connection");
        console.error(err.message);
        process.exit(1);
    });
}

module.exports = connectWithDB;