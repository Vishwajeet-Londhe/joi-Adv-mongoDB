// const mongoose = require('mongoose');
// mongoose.connect("mongodb://127.0.0.1:27017/testingadvdbcommands");

// const userSchema = new mongoose.Schema({
//     username:String,
//     name:String,
//     password:String,
//     age:String,
//     isMarried:Boolean,
//     email:String
// })

// module.exports = mongoose.model('User',userSchema);



// joi

const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/joitestdb");

const userSchema = mongoose.Schema({
    username:String,
    name:String,
    age:Number,
    contact:Number,
    email:String
});

module.exports = mongoose.model('User',userSchema);