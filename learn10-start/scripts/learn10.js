function start() {
    // Math: https://www.w3schools.com/js/js_math.asp
    // Demonstrate the use of round, ceil, floor, trunc, sign
    // pow, min, and random and display to the appropriate paragraphs
    document.getElementById("round").innerHTML = Math.round(4.6);
    document.getElementById("ceil").innerHTML = Math.ceil(4.2);
    document.getElementById("floor").innerHTML = Math.floor(4.4);
    document.getElementById("trunc").innerHTML = Math.trunc(5.4);
    document.getElementById("sign").innerHTML = Math.sign(-5);
    document.getElementById("pow").innerHTML = Math.pow(8, 2);
    document.getElementById("min").innerHTML = Math.min(0, 150, 30, 20, -8, -200);;
    document.getElementById("random").innerHTML = Math.random;

    // Random: https://www.w3schools.com/js/js_random.asp
    // create a random integer between 1 and 100 and display in the random2 paragraph
    document.getElementById("random2").innerHTML = Math.trunc(Math.random() * 100);

    // Booleans: https://www.w3schools.com/js/js_booleans.asp
    // read the reference


    // Comparisons: https://www.w3schools.com/js/js_comparisons.asp
    // demonstrate and explain the difference between == and === in the
    // comparisons paragraph
    document.getElementById("comparisons").innerHTML = "The === operator means strictly equal, which means both values have to be exactly equal. The == operator means both values have to be equal. You can see this when looking at the expression 1 === '1' and 1 == '1'. The expression on the left will return false, but the one on the right will return true.";


    // Conditions: https://www.w3schools.com/js/js_if_else.asp
    // Read the conditions page
}