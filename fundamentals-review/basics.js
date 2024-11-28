let age = 12;
let fullName = "Shwarma";
let isAdult = true;
let nullValue = null;
let undefinedVal;
let person = {
  fullName: fullName,
  age: age,
};

console.log(age);
console.log(fullName);
console.log(person);

function swap(a, b) {
  return [b, a];
}

a = 1;
b = 2;
console.log(a, b);
console.log(swap(a, b).toString().replace(",", " "));

function circleArea(radius) {
  return Math.PI * radius ** 2;
}

radius = 2;
console.log(
  `Area of circle with radius ${radius}: ${
    Math.round(circleArea(radius) * 100) / 100
  }`
);

for (let i = 0; i < 5; i++) {
  console.log(`Round ${i + 1}`);
}

function reverseString(s) {
  rs = "";
  for (let i = s.length - 1; i >= 0; i--) {
    rs += s[i];
  }
  return rs;
}

mystr = "hello";
console.log(reverseString(mystr));
console.log(mystr.split("").reverse().join(""));
