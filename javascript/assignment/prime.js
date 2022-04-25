//prime number

function checkPrime(num) {
  count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      count++;
    }
  }
  if (count == 2) {
    console.log(num + " is a Prime number");
  } else {
    console.log(num + " is not a Prime nummber");
  }
}

checkPrime(13);
checkPrime(10);
checkPrime(27);

var getPrime = function (num) {
  count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      count++;
    }
  }
  if (count == 2) {
    console.log(num + " is a Prime number");
  } else {
    console.log(num + " is not a Prime nummber");
  }
};

getPrime(19);
getPrime(43);
getPrime(10);

//factorial

function findFactorial(num) {
  res = 1;
  for (let index = 1; index <= num; index++) {
    res *= index;
  }
  console.log(num + "'s factorial is " + res);
}

findFactorial(5);

var getFactorial = function (num) {
  res = 1;
  for (let index = 1; index <= num; index++) {
    res *= index;
  }
  console.log(num + "'s factorial is " + res);
};

getFactorial(6);

var factorial = (num) => {
  res = 1;
  for (let index = 1; index <= num; index++) {
    res *= index;
  }
  console.log(num + "'s factorial is " + res);
};

factorial(7);
