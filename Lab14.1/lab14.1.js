const country = document.querySelector("country");
const continent = document.querySelector("continent");
const population = document.querySelector("population");

function whatCountry() {
  let currentValue = document.getElementById("country").innerHTML;
  if (currentValue == "") {
    document.getElementById("country").innerHTML = "Viet Nam";
    console.log("Viet Nam");
  } else {
    document.getElementById("country").innerHTML = "";
  }
}

function whatContinent() {
  let currentValue = document.getElementById("continent").innerHTML;
  if (currentValue == "") {
    document.getElementById("continent").innerHTML = "Asia";
    console.log("Asia");
  } else {
    document.getElementById("continent").innerHTML = "";
  }
}

function whatPopulation() {
  let currentValue = document.getElementById("population").innerHTML;
  if (currentValue == "") {
    document.getElementById("population").innerHTML = "80M";
    console.log("80M");
  } else {
    document.getElementById("population").innerHTML = "";
  }
}
