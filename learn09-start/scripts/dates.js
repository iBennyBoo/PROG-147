/* JavaScript Dates: https://www.w3schools.com/js/js_dates.asp */

// Create a variable, assign it to a new date object
// display the variable in the basic paragraph
const date = new Date();
document.getElementById("basic").innerHTML = date;

// create a new date variable and load the information for today into it
// display the results in the today paragraph (Year, Month, Day)
const today = new Date(2023, 2, 15);
document.getElementById("today").innerHTML = today;


// Create a new date variable based on the dateString and store your birthday in it
// display the variable in the birthday paragraph
const birthday = new Date("2023-06-25");
document.getElementById("birthday").innerHTML = birthday;


// Convert your basic date to the ISO string format and display the result
// in the iso paragraph
date = new Date("2023-02-15");
document.getElementById("iso").innerHTML = date;


//  Date Formats: https://www.w3schools.com/js/js_date_formats.asp
// Demonstrate 3 date formats of your choice to date1, date2, and date3 paragraphs
const date1 = new Date("Feb 15 2023");
const date2 = new Date("02/15/2023");
const date3 = new Date("2023");
document.getElementById("date1").innerHTML = date1;
document.getElementById("date2").innerHTML = date2;
document.getElementById("date3").innerHTML = date3;
//  getDate() Methods: https://www.w3schools.com/js/js_date_methods.asp
// Demonstrate 4 get date methods of your choice to get1-get4 paragraphs
document.getElementById("get1").innerHTML = date.getDay();
document.getElementById("get2").innerHTML = date.getHour();
document.getElementById("get3").innerHTML = date.getMinutes();
document.getElementById("get4").innerHTML = date.getMilliseconds();

// set date methods: https://www.w3schools.com/js/js_date_methods_set.asp
// Demonstrate 4 set date methods of your choice to set1-set4 paragraphs
date.setDay(10);
document.getElementById("set1").innerHTML = date;
date.setHour(8);
document.getElementById("set2").innerHTML = date;
date.setMinutes(32);
document.getElementById("set3").innerHTML = date;
date.setMilliseconds(900);
document.getElementById("set4").innerHTML = date;