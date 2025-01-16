//insert many

// const express = require('express');
// const app = express();

// const userModel = require("./models/user");

// const users = [
//     {
//         username: "vishwajeet123",
//         name: "Vishwajeet Londhe",
//         password: "securePass123",
//         age: "22",
//         isMarried: false,
//         email: "vishwajeet@example.com"
//     },
//     {
//         username: "john_doe",
//         name: "John Doe",
//         password: "john@456",
//         age: "28",
//         isMarried: true,
//         email: "john.doe@example.com"
//     },
//     {
//         username: "jane_smith",
//         name: "Jane Smith",
//         password: "janePass789",
//         age: "25",
//         isMarried: false,
//         email: "jane.smith@example.com"
//     },
//     {
//         username: "rohit_kumar",
//         name: "Rohit Kumar",
//         password: "rohitSecure",
//         age: "30",
//         isMarried: true,
//         email: "rohit.kumar@example.com"
//     },
//     {
//         username: "emma_watson",
//         name: "Emma Watson",
//         password: "emmaSecret",
//         age: "27",
//         isMarried: false,
//         email: "emma.watson@example.com"
//     },
//     {
//         username: "alice_johnson",
//         name: "Alice Johnson",
//         password: "alicePass789",
//         age: "24",
//         isMarried: false,
//         email: "alice.johnson@example.com"
//     },
//     {
//         username: "michael_brown",
//         name: "Michael Brown",
//         password: "michael@987",
//         age: "35",
//         isMarried: true,
//         email: "michael.brown@example.com"
//     },
//     {
//         username: "sophia_miller",
//         name: "Sophia Miller",
//         password: "sophiaM@pass",
//         age: "29",
//         isMarried: false,
//         email: "sophia.miller@example.com"
//     },
//     {
//         username: "david_clark",
//         name: "David Clark",
//         password: "davidC!123",
//         age: "31",
//         isMarried: true,
//         email: "david.clark@example.com"
//     },
//     {
//         username: "olivia_taylor",
//         name: "Olivia Taylor",
//         password: "oliviaT456",
//         age: "26",
//         isMarried: false,
//         email: "olivia.taylor@example.com"
//     },
//     {
//         username: "charles_moore",
//         name: "Charles Moore",
//         password: "charlesMoore123",
//         age: "38",
//         isMarried: true,
//         email: "charles.moore@example.com"
//     },
//     {
//         username: "amelia_white",
//         name: "Amelia White",
//         password: "ameliaWhite!789",
//         age: "23",
//         isMarried: false,
//         email: "amelia.white@example.com"
//     },
//     {
//         username: "ethan_hall",
//         name: "Ethan Hall",
//         password: "ethanH@pass",
//         age: "33",
//         isMarried: true,
//         email: "ethan.hall@example.com"
//     },
//     {
//         username: "isabella_adams",
//         name: "Isabella Adams",
//         password: "isabellaA456",
//         age: "27",
//         isMarried: false,
//         email: "isabella.adams@example.com"
//     },
//     {
//         username: "liam_wilson",
//         name: "Liam Wilson",
//         password: "liamW789",
//         age: "29",
//         isMarried: true,
//         email: "liam.wilson@example.com"
//     }
// ];


// app.get("/", function(req, res) {
//     res.send("Home is Working");
// })

// app.get("/createmany",async function(req, res) {
//     let data = await userModel.insertMany(users);
//     res.send(data);
// });

// app.listen(3000);




//eq

// const express = require('express');
// const app = express();

// const userModel = require("./models/user");

// app.get("/",function (req, res) {
//     res.send("Home is Working");
// })

// app.get("/eq",async function (req, res) {
//     let user = await userModel.find({age:{$eq:29}});
//     res.send(user);
// })

// app.listen(3000);





//nq

const express = require('express');
const app = express();

const userModel = require("./models/user");

app.get("/",function (req, res) {
    res.send("Home is Working");
})

app.get("/ne",async function (req, res) {
    let user = await userModel.find({age:{$ne:30}});
    res.send(user);
})

app.listen(3000);