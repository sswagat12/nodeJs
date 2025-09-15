// var a = 5;
// var b = 6;
// var ans = a + b;
// console.log(ans)

// a = 16
// if (a<12){
//     console.log("We are not allowed");
// }
// else{
//     console.log("We are allowed")
// }

// for loop
// var count = 10;
// for (i=1; i<=count; i++){
//     console.log(i)
// }

// object
// const Person = {
//     name: "Swag",
//     age:30,
//     isStudent: false,
//     hobbies: ["gaming", "coding", "swiming"]
// }

// console.log(Person.hobbies[0])

// filter
const ages = [32,23,45,14]

const result = ages.filter(checkAge);

function checkAge(age){
    return age<=18
}
console.log(result)