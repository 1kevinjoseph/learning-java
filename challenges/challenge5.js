// // A student learning JavaScript was trying to make a function.
//  His code should concatenate a passed string name with string "Edabit" and store it in a variable called result.
//   He needs your help to fix this code.

function nameString(name) {
  const b = "Edabit";
  // const result = name + b;
  const result = `${name}Edabit`;
  return result;
}
let x = nameString("yooo");
console.log(x);
// solved!!!