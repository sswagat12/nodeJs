var prompt = require('prompt-sync')();
const age = prompt("Please enter your age: ");
if (age < 18){
    console.log("Congo! You get a 20% discount");
}
else{
    console.log("You gen sen cit discount of 50%")
}
