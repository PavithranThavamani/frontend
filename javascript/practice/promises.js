// new Promise(function (resolve, reject) {
//   if (12 > 11) {
//     resolve("success");
//   } else {
//     reject("error");
//   }
// })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

//array

// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log("arr " + arr);
// arr.splice(2, 5, 345);
// console.log(arr);

//json.stringify (Javascript to JSON)
//json.parse (JSON to Javascript)

const employee = {
  fname: "tobey",
  lname: "maguire",
  age: "20",
  hobbies: ["helping", "swinging"],
  address: {
    city: "New York",
    country: "US",
  },
};

console.log(employee);
console.log("=====After stringify========");
const jsonObject = JSON.stringify(employee);
console.log(jsonObject);

console.log("======After Parse=========");
console.log(JSON.parse(jsonObject));
