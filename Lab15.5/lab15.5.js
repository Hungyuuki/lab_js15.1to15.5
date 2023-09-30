// Lab 15.5
let country = "Việt Nam";
let population = 80000000;
let language = "Vietnamese";
const continent = "Asia";
const isIsland = true;

let average = 33000000;
if (population > average) {
  let text_3 = `${country}'s population is above average`;
  console.log(text_3);
} else {
  text_3 = `${country}'s population is < 33 - population > million below average`;
  console.log(text_3);
}

console.log(" ");
console.log(" ");
console.log(" ");
console.log(" ");
console.log(" ");
console.log(" ");

// Thực hành ép kiểu ngầm định, ép dạng số sang dạng string
console.log("Ép kiểu Implicit 1: ");
let numb = 100;
let addString = "Team chúng tôi có " + numb + " người.";
console.log(
  addString + " Kiểu dl của numb " + ` ${numb}` + " là " + typeof numb
);

console.log(" ");
console.log(" ");
console.log(" ");
console.log(" ");
console.log(" ");
console.log(" ");

console.log("Ép kiểu Implicit 2: ");
let num = 50;
let str = num + "";
console.log(str + " Kiểu dl của num là " + typeof str); //ép kiểu thành công
console.log(num + " Kiểu dl của num là " + typeof numb);

console.log(" ");
console.log(" ");
console.log(" ");
console.log(" ");
console.log(" ");
console.log(" ");
console.log("Ép kiểu Explicit: ");
let number = 30;
let convertNumberToString = String(number);
console.log(typeof number + " " + typeof convertNumberToString);
