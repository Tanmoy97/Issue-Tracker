// require library
const mongoose = require('mongoose');

//connecting to database
mongoose.connect('mongodb+srv://Tanmoy:Tanmoy1997@cluster0.y7ydm.mongodb.net/test');

// aquire the connection
const db = mongoose.connection;

// if error occurs
db.on('error', console.error.bind(console, "Error in connecting to DataBase"));

// if running then print message

db.once('open', function(){
    console.log('Connected to database successfully')
});

// export the database
module.exports = db;