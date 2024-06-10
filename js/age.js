// Calculate age
const birthday = new Date(2004, 9, 4) // Oct. 4th, 2004

var now = new Date();
var age = now.getFullYear() - birthday.getFullYear();

now.setFullYear(birthday.getFullYear());
if (now - birthday < 0) age--;

console.log(age);
console.log(now - birthday);

// Change value in span tag
document.getElementById("age").innerHTML = age.toString();
