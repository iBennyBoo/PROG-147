// for loop - https://www.w3schools.com/js/js_loop_for.asp
// Write 99 bottles of beer on the wall using a for loop
// hints - decrement at the end, create a variable, save the song lyrics from
// the loop to the variable. use <br> instead of \n with the inner html. 
var text = "";
for (let i = 0; i < 99; i++) {
  text += ((99 - i) + " bottles on the wall, " + (99 - i) + " bottles of beer. Take one down, pass it around, " + (99 - (i + 1)) + " bottles of beer on the wall." + "<br>");
}
document.getElementById("beer").innerHTML = text;


//for in: https://www.w3schools.com/js/js_loop_forin.asp
// create an array of months and use the for in
// command to print them to the for-in paragraph
const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

var text2 = "";
for (let x in months) {
  text2 += months[x] + "<br>";
}
document.getElementById("for-in").innerHTML = text2;
// For of: https://www.w3schools.com/js/js_loop_forof.asp
// demonstrate the use of For Of to print letters from a string. 
// Create your own string variable of at least 5 letters
// print the results in the for-of paragraph
let word = "Spectacular";

var text3 = "";
for (let x of word) {
text3 += x + "<br>";
}
document.getElementById("for-of").innerHTML = text3;


// While loop: https://www.w3schools.com/js/js_loop_while.asp
// Create a while loop to print the numbers 1 to 50
// print the results in the while paragraph
var i = 1
var text4 = "";
while (i < 51) {
  text4 += "The number is " + i + "<br>";
  i++;
}
document.getElementById("while").innerHTML = text4;