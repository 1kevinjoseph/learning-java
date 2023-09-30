const car = { type: "Fiat", model: "500", color: "white" }; //object definition/contruction
//method 1 
const person = {
  name: "John",
  age: 30,
  gender: "male",

};

//method 2 of defining an object
const victor = new Object(); 
victor.name = "Victor";
victor.age = 20;
victor.gender = "male";
victor.weight = 90;

console.log(victor);

const james = new Object();
james.name = "james";
james.age = 24;
james.gender = "male";
james.weight = 89;

console.log(james);
console.log(person.description())