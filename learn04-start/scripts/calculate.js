function addDate(){
    let today = new Date();
    document.getElementById("myDate").innerHTML = today;
    document.getElementById("name").innerHTML = "";
    document.getElementById("rm1length").innerHTML = "";
    document.getElementById("rm1width").innerHTML = "";
    document.getElementById("rm1height").innerHTML = "";
    document.getElementById("rm1cost").innerHTML = "";

    document.getElementById("rm2length").value = "";
    document.getElementById("rm2width").value = "";
    document.getElementById("rm2height").value = "";
    document.getElementById("rm2cost").value = "";

    document.getElementById("rm3length").value = "";
    document.getElementById("rm3width").value = "";
    document.getElementById("rm3height").value = "";
    document.getElementById("rm3cost").value = "";


    document.getElementById("rooms").value = "1";
}

function estimate(){

    let name = document.getElementById("name").ariaValueMax;
    let length = parseFloat(document.getElementById("rm1length").value);
    let width = parseFloat(document.getElementById("rm1width").value);
    let height = parseFloat(document.getElementById("rm1height").value);
    let totalSqFt = ((length * height * 2) + (length * width * 2));
    let cost = (totalSqFt * .65);
    document.getElementById("rm1cost").value = cost;

    let length2 = parseFloat(document.getElementById("rm2length").value);
    let width2 = parseFloat(document.getElementById("rm2width").value);
    let height2 = parseFloat(document.getElementById("rm2height").value);
    let totalSqFt2 = ((length2 * height2 * 2) + (length2 * width2 * 2));
    let cost2 = (totalSqFt2 * .65);
    document.getElementById("rm2cost").value = cost2;


    let length3 = parseFloat(document.getElementById("rm1length").value);
    let width3 = parseFloat(document.getElementById("rm1width").value);
    let height3 = parseFloat(document.getElementById("rm1height").value);
    let totalSqFt3 = ((length3 * height3 * 2) + (length3 * width3 * 2));
    let cost3 = (totalSqFt3 * .65);
    document.getElementById("rm3cost").value = cost3;

    var numRooms = document.getElementById("rooms").value;
    if (numRooms == 1) {
        var totalCost = cost;
    } else if (numRooms == 2) {
        var totalCost = cost1 + cost2;
    } else if (numRooms == 3) {
        var totalCost = cost1 + cost2 + cost3;
    }
    document.getElementById("estimate").innerHTML = (name + ", your estimate is $" + totalCost);
}

function showRooms() {
    var numRooms = document.getElementById("rooms").value;
    if (numRooms == 1) {
        document.getElementById("room2").style.display = "none";
        document.getElementById("room3").style.display = "none";
    } else if (numRooms == 2) {
        document.getElementById("room2").style.display = "block";
        document.getElementById("room3").style.display = "none";
    } else if (numRooms == 3) {
        document.getElementById("room2").style.display = "block";
        document.getElementById("room3").style.display = "block";
    }
}