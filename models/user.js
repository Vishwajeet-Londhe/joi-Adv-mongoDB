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

const { required } = require('joi');
const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/joitestdb");

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required: true,
        minlength: 5,
        maxlength: 50,
        unique: true
    },
    name:{
        type:String,
        required: true,
        minlength: 3,
        maxlength: 100,
        required: true
    },
    age:{
        type:Number,
        min: 18,
        required: true
    },
    contact:{
        type:Number,
        minlength:10,
        required: true
    },
    email:{
        type:String
    },
});

module.exports = mongoose.model('User',userSchema);