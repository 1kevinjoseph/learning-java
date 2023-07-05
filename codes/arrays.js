const numbers = [1, 2,3,4, 5];
numbers.push(6);
console.log(numbers);
/*/numbers.sort();
console.log(numbers);
numbers.reverse
console.log(numbers)
var lastnumber= numbers[numbers.length-1]
console.log("this is the last array "+ lastnumber )/*/

numbers.sort(function (a, b){return a - b});
