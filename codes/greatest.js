/**Method to find the greatest number in an array */
let arr = [4, 56, 3, 44, 35, 74];
function checkGreatest(arr) {
  //write your code here
  
  for (i = 0; i < arr.length; i++) {
    greatest = arr[0] > arr[i];
  }
  return greatest;
}
checkGreatest(arr);

console.log(greatest);
