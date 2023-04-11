$(document).ready(function(){
            $("#submit").click(function(){
                event.preventDefault();

                line = $("#fname").val();
                line = line + " " + $("#lname").val();
                line = line + " age " + $("#age").val();
                line = line + " from " + $("#country").val();
                line = line + " asked " + $("#question").val() + "<br>";

                $("#list").append(line);
                $("#fname").val("");
                $("#lname").val("");
                $("#age").val("");
                $("#country").val("");
                $("#question").val("");
            });

            $("#darkmode").click(function(){
                $("h1, h2").removeClass("primary-headings")
                $("h1, h2").addClass("secondary-headings");
                $("#primary").addClass("dark");
                $("#primary").removeClass("light");
            });

            $("#lightmode").click(function(){
                $("h1, h2").removeClass("secondary-headings")
                $("h1, h2").addClass("primary-headings");
                $("#primary").addClass("light");
                $("#primary").removeClass("dark");
            });

            $("#larger").click(function(){
                var currentFontSize = parseInt($("#primary").css('font-size'));
                currentFontSize = currentFontSize + 3;
                setFont = currentFontSize + "px"
                $("#primary").css("fontSize", setFont);
            });

            $("#smaller").click(function(){
                var currentFontSize = parseInt($("#primary").css('font-size'));
                currentFontSize -= 3;
                setFont = currentFontSize + "px"
                $("#primary").css("fontSize", setFont);
            });
        });