function addme() {
    var fname = document.getElementById("fname").innerHTML;
    var lname = document.getElementById("lname").innerHTML;
    var email = document.getElementById("email").innerHTML;
    var phone = document.getElementById("phone").innerHTML;

    const information = {};
    information.firstName = fname;
    information.lastName = lname;
    information.email = email;
    information.phone = phone;

    const myJSON = JSON.stringify(information);

    document.getElementById("json-value").innerHTML = myJSON;
}