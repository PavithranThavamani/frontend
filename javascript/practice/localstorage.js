// localStorage.setItem("name", "pavithran");
// document.write(localStorage.getItem("name"));

// sessionStorage.setItem("email", "123@gmail.com");
// document.write(sessionStorage.getItem("email"));

let a;

login = () => {
  const val = localStorage.getItem("a");
  //   console.log(val);
  sessionStorage.setItem("sessionId", 123);
  document.write(sessionStorage.getItem("sessionId"));
  if (val) {
    a = Number(val);
  } else {
    a = 10;
    localStorage.setItem("a", "10");
  }
};

increment = () => {
  a += 10;
  localStorage.setItem("a", a);
};

logout = () => {
  localStorage.clear();
  sessionStorage.clear();
};

// document.write(sessionStorage.getItem("sessionId"));

//callback function
// first = (sec) => {
//   setTimeout(() => {
//     // second();
//     sec();
//     console.log("first excecuted");
//   }, 5000);
// };

// second = () => {
//   setTimeout(() => {
//     console.log("second excecuted");
//   }, 2000);
// };

// first(second);
// second(first);

//nested functions

// test = () => {
//   console.log("first");
//   inner = () => {
//     console.log("second");
//     inner2 = () => {
//       console.log("third");
//     };
//     return inner2;
//   };
//   return inner;
// };

// fun1 = () => {
//   console.log("fun 1");
//   fun2 = () => {
//     console.log("fun 2");
//     fun3 = () => {
//       console.log("fun 3");
//     };
//     return fun3;
//   };
//   return fun2;
// };

// fun1()()();

// test()()();
