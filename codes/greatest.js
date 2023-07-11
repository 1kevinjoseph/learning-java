/**Method to find the greatest number in an array */
let arr = [4, 56, 3, 99, 35, 74];

function checkGreatest(arr) {
  //write your code here
  let greatest = arr[0];

  for (i = 0; i < arr.length; i++) {
    //if the next element is greater make it the greatest
    if (arr[i + 1] > greatest) {
      greatest = arr[i + 1];
    }
  }
  return greatest;
}

const greatest = checkGreatest(arr);

console.log(greatest);
