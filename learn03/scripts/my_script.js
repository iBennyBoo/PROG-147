// Global Variables
//  global variables are declared with var
//  local variables are declared wih let
//  
var name1 = "Ben";
// myName = "Meredith Louise Engel" - Allowed but frowned upon

function names() {
    var name1 = "Ben";
    //fix the errors
    var firstName = "Benjamin",
        lastName = "Berman";
    document.getElementById("name").innerHTML = name1;
    document.getElementById("full-name").innerHTML = firstName + " " + lastName;
    var firstName = "Doctor";
    var name = "Ben";
    document.getElementById("first").innerHTML = name;
    document.getElementById("nick-name").innerHTML = firstName;

}

function scope() {
    //fix the errors
    const taxRate = .07; // This is a constant
    var firstName = "Benjamin",
        lastName = "Berman";
    document.getElementById("global").innerHTML = name;
    document.getElementById("local").innerHtml = firstName;
    document.getElementById("tax").innerHTML = taxRate;
    //taxRate = .08
    document.getElementById("new-tax").innerHTML = taxRate;
}

function letMe() {
    // Fix the errors
    let dog1 = "Ollie";
    dog2 = "Nessie";
    //dog2 = "Nessie";
    var dog3 = "Paisley";
    var dog2;
    document.getElementById("dog1").innerHTML = dog1;
    document.getElementById("dog2").innerHTML = dog2;
    document.getElementById("dog3").innerHTML = dog3;
    var dog2 = "Bowser"
    document.getElementById("dog1-2").innerHTML = dog2;
}

function constants() {
    // fix the errors
    const PI = 3.14;
    const dogs = ["Ollie", "Nessie", "Ory"];
    document.getElementById("doggos").innerHTML = dogs;
    dogs[0] = "Ollie Bear";
    document.getElementById("new-doggos").innerHTML = dogs;
    const breed = ["Shepherd", "Collie", "Bouvier"];
    document.getElementById("pi").innerHTML = PI;
    document.getElementById("breed").innerHTML = breed;
}

function myMath() {
    // create statements demonstrating the use of each operator
    let addition = 10 + 32;
    document.getElementById("addition").innerHTML = "10 + 32 = " + addition;
    let subtraction = 32 - 10;
    document.getElementById("subtraction").innerHTML = "32 - 10 = " + subtraction;
    let multiplication = 8 * 7;
    document.getElementById("multiplication").innerHTML = "8 * 7 = " + multiplication;
    let exponent = 2**3;
    document.getElementById("exponent").innerHTML = "2^3 = " + exponent;
    let division = 40 / 4;
    document.getElementById("division").innerHTML = "40 / 4 = " + division;
    let modulus = 5 % 2;
    document.getElementById("modulus").innerHTML = "5 % 2 = " + modulus;
    let increment = 3++;
    document.getElementById("increment").innerHTML = "The number after 3 is " + increment;
    let decrement = 9--;
    document.getElementById("decrement").innerHTML = "The number before 9 is = " + decrement;
}

function assignments() {
    // create statements demonstrating the use of each assignment type
    x = 10
    document.getElementById("equals").innerHTML = "x = 10  =" + "x = " + x;
    x += 1
    document.getElementById("plus_equals").innerHTML = "x += 1  =" + x;
    x -= 1
    document.getElementById("minus_equals").innerHTML = "x -= 1  =" + x;
    x *= 2
    document.getElementById("times_equals").innerHTML = "x *= 2  =" + x;
    x /= 2
    document.getElementById("divide_equals").innerHTML = "x /= 2  =" + x;
    x %= 3
    document.getElementById("modulus_equals").innerHTML = "x %= 3  =" + x;
}

function dataTypes() {
    // create samples of each of the data types from the
    // index page and display them in the Data Types section
    const warm_colors = ["Red", "Yellow", "Orange"];
    document.getElementById("array").innerHTML = warm_colors;
    const car = {type:"Fiat", model: "500", color:"blue"};
    document.getElementById("object").innerHTML = car;

}
