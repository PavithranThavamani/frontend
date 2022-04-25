document.getElementById("head").innerHTML = "Hello javascript";
document.getElementById("demo").style.color = "green";
document.getElementById("para").style.backgroundColor = "yellow";
// document.body.appendChild(
//   (document.createElement("h4").innerHTML = "creating the element")
// );

//append element in a body
const add = document.createElement("p");
add.innerText = "creating the element";
document.body.appendChild(add);

//append element in a document

let word = document.createElement("h2");
word.innerHTML = "why bro!!!!!";
document.getElementById("demo").appendChild(word);

//queryselector

const getQuery = document.querySelector("p");
console.log(getQuery);

//queryselectorall

console.log(document.querySelectorAll("p"));

//creating button
const btn = document.createElement("button");
btn.innerText = "Go";
document.body.appendChild(btn);

function submitHandler() {
  let name = document.forms["myForm"]["name"].value;
  let email = document.forms["myForm"]["email"].value;
  let phoneNumber = document.forms["myForm"]["phoneNumber"].value;
  let password = document.forms["myForm"]["password"].value;
}
