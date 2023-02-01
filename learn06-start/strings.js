function start() {
    // follow the directions in the comments
    // print to the index page
    document.getElementById("index").innerHTML = "printing to index page?"
    // print your name to the name heading
    document.getElementById("name").innerHTML = "Ben Berman";

    // from JavaScript Strings: https://www.w3schools.com/js/js_strings.asp


    // String length: calculate the string length and print to the length paragraph
    let myString = "Be it ever so humble, there is no place like home."
    document.getElementById("length").innerHTML = myString.length;

    // Escape sequences
    // print a string to the escape paragraph that uses three different escape sequences (look at the web page)
    let example1 = "It\'s alright, We are the so-called \"Vikings\" from the north. My name is \\, pronounced backslash.";
    document.getElementById("escape").innerHTML = example1;
    // JavaScript String Methods https://www.w3schools.com/js/js_string_methods.asp

    // create a variable named 'name' and store your complete name in it
    // Use the JavaScript slice function to display your first name to first paragraph
    let name = "Benjamin Paul Berman";
    let example2 = name.slice(0, 8);
    document.getElementById("first").innerHTML = example2;
    // Use the Javascript substring Method to display your middle name to the middle paragraph
    let example3 = name.substring(9, 13);
    document.getElementById("middle").innerHTML = example3;
    // Use the JavaScript subst Method to display your last name to the last paragraph
    let example4 = name.substr(13);
    document.getElementById("last").innerHTML = example4; 

    // replacing string content - in the following variable use the replace method to put your major 
    // in a new string and print to the major paragraph

    let major = "I'm majoring in Physical Therapy at McHenry County College"
    let newMajor = major.replace("Physical Therapy", "Mobile Design and Development")
    document.getElementById("major").innerHTML = newMajor;

    // convert the following variable to upper case then print to the upper paragraph
    let myText = "It\'s a great day to be alive!"
    let newText = myText.toUpperCase();
    document.getElementById("upper").innerHTML = newText;
    // Use the trim() method to remove white spaces from the following variable and print to the
    // trim paragraph
    let trimText = "                  McHenry County College                "
    let trimmed = trimText.trim()
    document.getElementById("trim").innerHTML = trimmed;
    // use the indexOf() method to get the index of 'May' and print the index number to the index paragraph

    let months = "January, February, March, April, May, June, July, August, September, October, November, December"
    document.getElementById("index").innerHTML = months.indexOf("May");

    // JavaScript Template Literals   https://www.w3schools.com/js/js_string_templates.asp

    // create a template literals for both your first and last name (name the variables first and last)
    let first = `Ben`;
    let last = `Berman`;

    // Use Variable substitutions to create a greeting that incorporates your first and last name and 
    // print to the greeting paragraph
    document.getElementById("greeting").innerHTML = "Howdy partner! My name is "+ first + " " + last;
}