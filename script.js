// let ninbutsu = "Yamada Asaemon";
// if (true) {
//   alert("Omae ha mou shindeiru");
// }

const buttonB = document.querySelector("#button_B");
const headingB = document.querySelector("#heading_B");

buttonB.onclick = () => {
  const name = prompt("What is your name?");
  alert(`Hello ${name}, nice to see you!`);
  headingB.textContent = `Welcome ${name}`;
};
// let myName;
// console.log("Giá trị của myName là: " + myName);
// println(myName);

console.log("Ví dụ về let");
let x = 1;

if (x === 1) {
  let x = 2;
  // let x = 5; Không được vì đây là vừa khai báo lại và vừa gán lại
  // Thay vào đó hãy chỉ gán lại x=3 để thay đổi giá trị của biến;
  console.log(x);
  // Expected output: 2
}

console.log(x);
// Expected output: 1
//Ra khỏi cặp {} thì x không còn được gán lại.

console.log("Ví dụ về var");
var y = 1;

if (y === 1) {
  var y = 2;
  // var y = 5; Lúc này var lại cho phép khai báo lại và gán lại

  console.log(y);
  // Expected output: 2
}

console.log(y);
// Expected output: 1
//Ra khỏi cặp {} thì y không còn được gán lại.
// Vậy let chặt chẽ và ít lỗi hơn là var

console.log("Ví dụ về kiểu dl mảng");
let myNameArray = ["Chris", "Bob", "Jim"];
let myNumberArray = [10, 15, 40];
console.log(myNameArray[2]);
console.log(myNumberArray[1]);

console.log("Ví dụ về kiểu dl đối tượng");
let dog = { name: "Spot", breed: "Dalmatian" };
console.log(dog.name + " & Loại của dog là " + typeof dog);
