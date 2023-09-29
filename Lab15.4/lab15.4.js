let country = "Việt Nam";
let population = 80000000;
let language = "Vietnamese";
const continent = "Asia";
const isIsland = true;
let text = `Nếu quốc gia bị chia cắt làm hai miền, mỗi miền gồm một nửa dân số của quốc gia, vậy sẽ có ${
  population / 2
} người sống ở mỗi miền`;
console.log(text);
// Tăng population lên 1
population = 80000000 + 1;
console.log(population);

// Khai báo Phần Lan
let finland = "Finland";
let population_findland = 6000000;
let compare = population > population_findland;
if ((compare = true)) {
  let text_2 = `Dân số nước mình lớn hơn dân số Phần Lan`;
  console.log(text_2);
}
// Tạo biến description String và Template Literal
let description = `${country} and its ${population} million people speak ${language}`;
console.log(description);
