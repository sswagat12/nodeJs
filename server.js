// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile('greeting.txt', 'Hi ' + user.username + '!\n', ()=>{console.log("file is created!!")});


// const notes = require('./notes.js');
// console.log("server loaded!!");

// var age = notes.age;
// var sum = notes.addNum(age, 10)


// console.log(age);
// console.log("sum is now", sum);



// lodash
// var _ = require('lodash');

// let a = ["hello", "hello", 8, 9, 0, 7, 8, 7, 11, 14, 14]
// var filter = _.uniq(a);
// console.log(filter)


// Express JS
// const jsonString = '{"name":"John", "age":30, "city":"New York"}';
// const jsonObject = JSON.parse(jsonString); //Convert JSON string to object
// console.log(jsonObject.name)

// const objToConvert = {
//     name: "Alice",
//     age: 24
// }

// const json = JSON.stringify(objToConvert)
// console.log(json)

//creating server and 1st get request
const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send("Welcome to our hotel!!!!")
})

app.get('/chicken', function (req, res) {
    res.send("Sure! I would love to serve chicken!")
})

app.get('/idli', function (req, res){
    var customized_idli = {
        name: 'rava idli',
        size: '10 cm diameter',
        is_sambar: true,
        is_chutney: false
    }
    res.send(customized_idli)
})

app.listen(3000)
