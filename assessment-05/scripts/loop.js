function start(){
    var i = 1;
    while (i < 13){
        
        switch (i){
            case 1:
                document.getElementById("january").innerHTML = "New Year's Day" + "<br>" + "Trivia Day" + "<br>" + "Australia Day";
                break;
            case 2:
                document.getElementById("february").innerHTML = "Groundhog's Day" + "<br>" + "Valentine's Day" + "<br>" + "President's Day" + "<br>" + "Mardi Gras";
                break;
            case 3:
                document.getElementById("march").innerHTML = "International Women's Day" + "<br>" + "St Patrick's Day";
                break;
            case 4:
                document.getElementById("april").innerHTML = "April Fool's Day" + "<br>" + "Easter" + "<br>" + "Patriot's Day" + "<br>" + "Earth Day";
                break;
            case 5:
                document.getElementById("may").innerHTML = "May Day" + "<br>" + "Star Wars Day" + "<br>" + "Mother's Day";
                break;
            case 6:
                document.getElementById("june").innerHTML = "Flag Day" + "<br>" + "Summer Solstice";
                break;
            case 7:
                document.getElementById("july").innerHTML = "Independence Day" + "<br>" + "National Hot Dog Day";
                break;
            case 8:
                document.getElementById("august").innerHTML = "National S'mores Day" + "<br>" + "Left Hander's Day";
                break;
            case 9:
                document.getElementById("september").innerHTML = "Labor Day" + "<br>" + "Constitution Day";
                break;
            case 10:
                document.getElementById("october").innerHTML = "Columbus Day" + "<br>" + "Halloween";
                break;
            case 11:
                document.getElementById("november").innerHTML = "Thanksgiving" + "<br>" + "Black Friday" + "<br>" + "Cyber Monday";
                break;
            case 12:
                document.getElementById("december").innerHTML = "Winter Solstice" + "<br>" + "Christmas" + "<br>" + "Kwanzaa" + "<br>" + "New Year's Eve";
                break;
            default:
                break;
                
        }

        i++;
    }
}