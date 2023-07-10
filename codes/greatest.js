/**Method to find the greatest number in an array */
let arr = [4, 56, 3, 44, 35, 74];
function checkGreatest(arr) {
  //write your code here
  greatest = 0;
  for (i = 0; i < arr.length; i++) {
    greatest = arr[0] > arr[i];
  }
  return greatest;
}
checkGreatest(arr);
let large = checkGreatest(arr);
console.log(greatest);
