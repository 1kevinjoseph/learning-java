/**Given an array of numbers write a function that will split
 *  the array into two arrays even and odd respectively*/
let arr = [2, 5, 4, 7, 9, 10];
splitArr(arr);
evenOdd = splitArr(arr);
console.log(evenOdd);
function splitArr(arr) {
  //write your code here
  // declaring split arrays
  let even = [];
  let odd = [];
  number = arr[0];
  for (i = 0; i < arr.length; i++) {
    // looping statement

    if (arr[i + 1] % 2 === 0) {
      //condition to check if number is even or odd

      number = even.push;
      number = arr[i + 1];
    } else {
      number = odd.push;
      number = arr[i + 1];
    }
  }

  return arr;
}

let arr = [1, 4, 5, 8, 34, 67, 1, 5, 9, 12, 6, 8, 90];
let result = splitArr(arr);
console.log(result);
