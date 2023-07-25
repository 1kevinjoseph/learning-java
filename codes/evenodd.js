/**Given an array of numbers write a function that will split
 *  the array into two arrays even and odd respectively*/
function splitArr(arr) {
  //write your code here
  console.log(arr);

  //create the two arrays needed
  let evenArr = [];
  let oddArr = [];
  let combArr = [];

  //loop into given array and split
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    //check if number is even
    isNumEven(num) ? evenArr.push(num) : oddArr.push(num);
  }

  combArr.push(evenArr);
  combArr.push(oddArr);
  return combArr;
}

function isNumEven(num) {
  return num % 2 == 0;
}

let arr = [1, 4, 5, 8, 34, 67, 1, 5, 9, 12, 6, 8, 90];
let result = splitArr(arr);
console.log(result);
