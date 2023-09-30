const numbers = [1, 2, 3, 4, 5]; //declare an array

var lastnumber = numbers[numbers.length - 1];
console.log("this is the last array " + lastnumber);

numbers.sort(function (a, b) {
  return a - b;
});

//array methods
numbers.length //shows length of array

numbers.push(6); // adding an element to array (will appear end the end of the list)
console.log(numbers);

numbers.sort(); // sortting elements in aarray in ascending order
console.log(numbers);

numbers.reverse; //sorting elements in descending order
console.log(numbers);