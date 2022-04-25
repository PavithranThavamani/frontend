//copy by value

let a = 10;
let b = a;

console.log(a, b);
console.log(a, b + 10);

//copy by reference

let arr = [1, 2, 3, 4, 5];
let tempArr = arr; //copy arr with same address

tempArr.push(6);
console.log(arr, tempArr);

let tempArr2 = [...arr]; //copy the reference of arr in tempArr2
tempArr2.push(7);
console.log(arr, tempArr2);

console.log(arr, ...arr, 7, "add");

//copying objet
//shallow copy
console.log("");
console.log("-----------shallow copy with single layer------------");
console.log("");
let person = {
  fname: "pavithran",
  designation: "developer",
  salary: 200000,
};

let tempPerson = person;
person.fname = "pavi";
console.log("");
console.log("without spreading");
console.log("");
console.log(person, tempPerson);

tempPerson2 = { ...person };
person.fname = "pavirio";
console.log("");
console.log("with spreading");
console.log("");
console.log(person, tempPerson2);

tempPerson2.phoneNum = "1231231231";
console.log(person, tempPerson2);
console.log("");
console.log("--------------shallow copy with multiple  layer-------------");
console.log("");
let movie = {
  movieName: "spider man",
  actor: "Tom Holland",
  details: {
    heroine: "zendaya",
  },
};

let tempMovie = movie;

movie.villian = "doc strange";
console.log("");
console.log("without spreading");
console.log("");
console.log(movie, tempMovie); //adding data without spreading, so impact on both content

let tempMovie2 = { ...movie };

movie.villian = "green goblin";
tempMovie2.actor = "tobey maguire, andrew garfield, tom holland";
movie.details.heroine2 = "Gwen Stacy";
console.log("");
console.log("with spreading");
console.log("");
console.log(movie, tempMovie2); // adding data after spreading, so only impact on the specified content in single layer
// adding data after spreading, so impact on the both the contents in multiple layer

let deepCopy = { ...movie, details: { ...movie.details } };
movie.details.heroine = "emma watson";
console.log("");
console.log("------------without deepcopy----------------");
console.log(movie, tempMovie, tempMovie2, deepCopy);
deepCopy.details.heroine = "mary jane";
console.log("");
console.log("-----------------with deepcopy--------------");
console.log(movie, tempMovie, tempMovie2, deepCopy);
