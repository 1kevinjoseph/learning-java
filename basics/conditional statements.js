//conditional statements in javascript
// if else condition
let a = 10;
let b = 15;
if (a > b) {
  console.log("a>b");
} else {
  console.log("b>a");
}

// simplified version

if (a < b) console.log("a>b");
else console.log("b>a");

//even more simplified
a < b ? console.log("a>b") : console.log("b>a");

/**else if */
function cond(day) {
  if (day === "Monday") {
    console.log("Today is Monday");
  }else if (day === "Tuesday") {
    console.log("Today is Tuesday");
  }else if (day === "Wednesday") {
    console.log("Today is Wednesday");
  }else if (day === "Thursday") {
    console.log("Today is Thursday");
  }else if (day === "Friday") {
    console.log("Today is Friday");
  }else{
    console.log("I dont know when");
  }
}
cond("Thursday");

// switch case conditions
//used instead of if else statemnts
// example of switch case
 let fruits = "ale"
 switch(fruits){
   case "apple":
   alert("fruit is apple")
   break
   case "banana":
   alert("fruit is banana")
 default:
 alert("no fruit")
}

// basic syntax using days of the week
var dayOfWeek = "Monday";
switch (dayOfWeek) {
  case "Monday":
    console.log("It's Monday!");
    break;
  case "Tuesday":
    console.log("It's Tuesday!");
    break;
  case "Wednesday":
    console.log("It's Wednesday!");
    break;
  case "Thursday":
    console.log("It's Thursday!");
    break;
  case "Friday":
    console.log("It's Friday!");
    break;
  case "Saturday":
    console.log("It's Saturday!");
    break;
  case "Sunday":
    console.log("It's Sunday!");
    break;
  default:
    console.log("Invalid day of the week.");
    break;
}