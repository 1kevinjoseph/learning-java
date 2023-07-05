function add() {
  let x;
  var y;
  const c = 15;
  x = 15;
  y = c + x;
  console.log(y);
}

const add2 = (x, y) => {
  return x + y;
};

function greet() {
  window.location.reload();
}

const myCandles = [4, 4, 1, 3];

function birthdayCakeCandles(candles) {
  // Write your code here
  console.log(candles);
  let x = 0;
  for (let i = 0; i < candles.length; i++) {
    // x = x + candles[i];
    x += candles[i];
  }
  console.log(x);
}

/**else if */
function cond(day) {
  // if (day === "Monday") {
  //   console.log("Today is Monday");
  // }else if (day === "Tuesday") {
  //   console.log("Today is Tuesday");
  // }else if (day === "Wednesday") {
  //   console.log("Today is Wednesday");
  // }else if (day === "Thursday") {
  //   console.log("Today is Thursday");
  // }else if (day === "Friday") {
  //   console.log("Today is Friday");
  // }else{
  //   console.log("I dont know when");
  // }

  /**Switch */
  switch (day) {
    case "Monday":
      // code block
      console.log("Today is Monday");
      break;
    case "Tuesday":
      // code block
      console.log("Today is Tuesday");
      break;
    case "wednesday":
      // code block
      console.log("Today is Wednesday");
      break;
    case "Thursday":
      // code block
      console.log("Today is Thursday");
      break;
    case "Friday":
      // code block
      console.log("Today is Friday");
      break;
    default:
      // code block
      console.log("I dont know when");
  }
}

cond("Thursday");

// birthdayCakeCandles(myCandles);

/**
 * loops
 * problem solving skills
 * algorithms
 *
 *
 * 1. conditions
 * 2. loops
 * 3. data structures
 * 4. algorithms
 *
 * 1.operators
 * 
 * 2.ADD ELEMENTS IN AN ARRAY
 * 3.ADD EVEN NUMBERS BETWEEN 1 AND 100
 * 4.DETECT THE LARGEST NUMBER IN ANY GIVEN ARRAY
 *
 * 
 *  Referenc:
 * W3SCHOOLS
 */

