const add = (...nums) => {
  let sum = 0;
  console.log(nums);
  console.log(typeof nums);
  console.log(...nums);

  for (let index = 0; index < nums.length; index++) {
    sum += nums[index];
  }
  console.log("sum is " + sum);
};

add(12, 34);
add(34, 45, 343);
add(34, 34, 23, 54, 12, 78);

//destructuring

let me = {
  myName: "pavithran",
  designation: "developer",
  salary: 2000000,
};
const { myName, designation, salary } = me;

console.log(myName, designation, salary);

//destructuring an array

const hobbies = ["dance", "play", "read", "write"];
const [hobby1, hobby2, hobby3, hobby4] = hobbies;
console.log(`hobby1 - ${hobby1}`);
console.log(`hobby2 - ${hobby2}`);
console.log(`hobby3 - ${hobby3}`);
console.log(`hobby4 - ${hobby4}`);
console.log("=========================window====================");
console.log(window);
console.log("==================document=======================");
console.log(window.document);
console.log("=======================history========================");
console.log(window.history);
console.log("=======================navigator==================");
console.log(window.navigator);
console.log("==========current location=================  ,m/.");
navigator.geolocation.getCurrentPosition((loc) => {
  console.log("location", loc);
});

//this
