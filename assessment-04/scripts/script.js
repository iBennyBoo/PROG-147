var number = 0;

function start(){
    number = Math.floor(Math.random() * 1000) + 1;
    //number = 3;
    alert(number);
}

function game(){
    var guess = document.getElementById("guess").value;
    if(guess == number){
        document.getElementById("guessed").innerHTML = "CORRECT!"
    }

    if (number >= guess - 100){
        document.getElementById("guessed").innerHTML = "WARM!"
    } else if (number >= guess - 250){
        document.getElementById("guessed").innerHTML = "COLD!"
    }
    
    if (number - 250 >= guess){
        document.getElementById("guessed").innerHTML = "COLD!"
    } else if (number - 100 >= guess){
        document.getElementById("guessed").innerHTML = "WARM!"
    }

}