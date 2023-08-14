//Calculate the sum of numbers from 1 to 10
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function arrSum(arr) {
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      return sum;
}
console.log(arrSum(arr))
