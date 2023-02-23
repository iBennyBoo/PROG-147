function calculate() {
    var chi = '';
    let myname = document.getElementById("fname").value;
    let month = parseInt(document.getElementById("month").value);
    let date = parseInt(document.getElementById("date").value);
    let year = parseInt(document.getElementById("year").value);

    var x = year % 12;
    switch (x) {
        case 1:
            chi = "Rooster" //rooster
            break;
        case 0:
            chi = "Monkey" //monkey
            break;
        case 11:
            chi = "Goat" //goat
            break;
        case 10:
            chi = "Horse" //horse
            break;
        case 9:
            chi = "Snake" //snake
            break;
        case 8:
            chi = "Dragon" //dragon
            break;
        case 7:
            chi = "Rabbit" //rabbit
            break;
        case 6:
            chi = "Tiger" //tiger
            break;
        case 5:
            chi = "Ox" //ox
            break;
        case 4:
            chi = "Rat" //rat
            break;
        case 3:
            chi = "Pig" //pig
            break;
        case 2:
            chi = "Dog" //dog
            break;
        default:
            chi = "not found in my list."
            break;
    }

    document.getElementById("nameout").innerHTML = myname;
    document.getElementById("chinese").innerHTML = "Your Chinese zodiac sign is: " + chi;


}