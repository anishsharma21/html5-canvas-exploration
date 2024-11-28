let age = 12;
let fullName = "Shwarma";
let isAdult = true;
let nullValue = null;
let undefinedVal;
let person = {
    fullName: fullName,
    age: age,
}

console.log(age);
console.log(fullName);
console.log(person);

function swap(a, b) {
    return [b, a]
}

a = 1
b = 2
console.log(a, b)
console.log(swap(a, b).toString().replace(",", " "))