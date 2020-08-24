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
} else if (century > 30) {
    alert("century cannot go past 30");
}else if (century < 0){
    alert("century cannot be negative");
}

var year = parseInt(prompt("Enter a year:"));
if (month == "") {
    alert("Input the correct month");
} else if (isNaN(century)) {
    alert("Input a number");
} else if (month > 31) {
    alert("month cannot go past 31");
}else if (month < 0){
    alert("month cannot be negative");
}

alert(getDayNumber(century, year, month, day))
console.log(century)