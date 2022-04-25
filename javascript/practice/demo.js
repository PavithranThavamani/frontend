//let datatype

var string = "hello all";
console.log(string);
// document.write(string);
// // console.log(first);
// var a = null;
// console.log("a is " + a);
// console.log(b);
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof string);

// //operators

// var a = 10 + 20;
// console.log(a);
// console.log(typeof (10 + "string"));

// 12 > 34
//   ? console.log("true")
//   : 2 > 3
//   ? console.log("true")
//   : console.log("False");
console.log(3 > 2 > 1);

//named functions
console.log(addNumbers(10, 20));

function addNumbers(a, b) {
  console.log(a + b);
  return a + b;
}

console.log(addNumbers(10, 20));

//anonymous functions
var sub = function (a, b) {
  return a - b;
};

console.log(sub(10, 20));

//immediate invoked functions

var mul = function () {
  console.log("immediate invoked function");
};
mul();

//callback finctions

function result(sum) {
  return sum + 100;
}

console.log(result(addNumbers(100, 200)));

function getAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

function eligible(result) {
  if (result === true) {
    console.log("Eligible for Voting");
  } else {
    console.log("Not eligible for Voting");
  }
}

eligible(getAge(450));
