/**Given an array of numbers write a function that will split
 *  the array into two arrays even and odd respectively*/
const arr = [2, 4, 5, 7, 9, 11];
function splitArr(arr) {
  //write your code here
  // declaring split arrays
  const even = [];
  const odd = [];
  number = arr[0];
  // looping statement
  for (i = 0; i < arr.length; i++)
    //condition to check if number is even or odd
    if (number % 2 === 0) {
      number = even.push;
    } else {
      number = odd.push;
    }
  return arr;
}
splitArr(arr);
const evenOdd = splitArr(arr);
console.log(evenOdd);
