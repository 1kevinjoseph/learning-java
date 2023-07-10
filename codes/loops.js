/**Add even numbers between 1 and 100 */
function evenAdd() {
  let sum = 0;
  for (let i = 0; i <= 100; i += 2) {
    sum += i;
  }
  console.log(sum);
}

function evenAdd2(number) {
  let sum = 0;
  for (let i = 0; i <= number; i += 2) {
    sum += i;
  }
  console.log(sum);
}

/**Add numbers in an array */
let arr = [2, 6, 4, 33, 7, 1, 99, 4, 6, 3, 6, 4];

function arrSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

evenAdd2(500);
// let arrayTotal = arrSum(arr);
// console.log(arrayTotal);
