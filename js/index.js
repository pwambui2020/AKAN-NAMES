var getDayNumber = function (century, year, month, day)
 {
    return (((century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) %7;
};


var century = parseInt(prompt("Enter a century:"));

var month = parseInt(prompt("Enter a month:"));
var day = parseInt(prompt("Enter a day:"));


if (century == "") {
    alert("Input the correct century");
} else if (isNaN(century)) {
    alert("Input a number");
} else if (century > 21) {
    alert("century cannot go past 21");
}else if (century < 0){
    alert("century cannot be negative");
}

var year = parseInt(prompt("Enter a year:"));
if (month == "") {
    alert("Input the correct year");
} else if (isNaN(century)) {
    alert("Input a number");
} else if (year > 100) {
    alert("month cannot go past 100");
}else if (year < 0){
    alert("month cannot be negative");
}

var year = parseInt(prompt("Enter a month:"));
if (month == "") {
    alert("Input the correct month");
} else if (isNaN(month)) {
    alert("Input a number");
} else if (month > 12) {
    alert("month cannot go past 12");
}else if (month < 0){
    alert("month cannot be negative");
}
var year = parseInt(prompt("Enter a day:"));
if (month == "") {
    alert("Input the correct day");
} else if (isNaN(century)) {
    alert("Input a number");
} else if (day > 31) {
    alert("day cannot go past 31");
}else if (day < 0){
    alert("day cannot be negative");
}

alert(getDayNumber(century, year, month, day))
console.log(century)