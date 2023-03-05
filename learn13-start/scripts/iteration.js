/*
Iterables: https://www.w3schools.com/js/js_iterables.asp
Read the page
Demonstrate iteration of a list 
Create a list of movies, books, or games at least 5 items long and 
display them in the list paragraph
*/
const movies = ["Saving Private Ryan", "The Irishman", "Good Fellas", "Halloween", "Pixels"]
var text = "";
for (const x of movies) {
  text += x + "<br>"
}
document.getElementById("list").innerHTML = text;


/*
JS Sets

https://www.w3schools.com/js/js_sets.asp

Create a set with at least 5 song titles in it
display the contents of the set in the set1 paragraph (use iteration)

*/
const songs = new Set(["Let Her Go", "Jimmy Cooks", "Hours in Silence", "Parent Trap", "Late to the Party"]);
text = "";
for (const x of songs) {
  text += x + "<br>";
}
document.getElementById("set1").innerHTML = text;

// add two more songs to the set then display in the set2 paragraph
songs.add("Conversations");
songs.add("In My Head");
text = "";
for (const x of songs) {
  text += x + "<br>";
}
document.getElementById("set2").innerHTML = text;

/* 
Maps
https://www.w3schools.com/js/js_maps.asp

Maps are like dictionaries in python
Create a map with five names and emails in it.
Display the contents of the map in map1 use the forEach() method (bottom of
    the reference page)
*/
const people = new Map([
  ["Ben", "bpb062004@gmail.com"],
  ["Joe", "joeXXrules@yahoo.com"],
  ["Richard", "rsmith@gmail.com"],
  ["Ted", "tjohnson@gmail.com"],
  ["Mary", "marysue@yahoo.com"]
]);

text = "";
people.forEach (function(value, key) {
  text += key + ' = ' + value + "<br>";
})
document.getElementById("map1").innerHTML = text;

// add two new names and emails and display in map2 use the forEach() method
people.set("Rebecca", "rdawson@ahrefs.com")
people.set("Laura", "lauragames@outlook.com")
text = "";
people.forEach (function(value, key) {
  text += key + ' = ' + value + "<br>";
})
document.getElementById("map2").innerHTML = text;

// get and display the email of one person, display in map3
document.getElementById("map3").innerHTML = people.get("Ben");