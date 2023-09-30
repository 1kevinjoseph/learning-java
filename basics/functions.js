// functions
function add(x, y) {
  return x + y;
}
// arrow functions
const add2 = (x, y) => {
  return x + y;
};

add();
//simple function to check temperature
/**Check temperature */
function tempCheck(temp) {
  if (temp <= 15) {
    console.log("it is cold");
  } else if (temp <= 25) {
    console.log("it is room temperature");
  } else {
    console.log("it is hot");
  }
}

tempCheck(20);
