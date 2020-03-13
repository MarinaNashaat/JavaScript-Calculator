$(document).ready(function() {
    var screen = [];
    var num1 = "";
    var dotted = "";
    var opsign = "";

    $(".number").on("click", function() {

        num1 = $(this).text();

        screen.push(num1);

        $("#display").html(screen);
        if (screen.length >= 15) {
            screen = [];
            $("#display").text("Too Large");
        }



    });
    $("#zero").on("click", function() {
        if ($('#display').text() != '0' && screen.length < 10) {
            num1 = '0';
            $('#display').html(num1);
        }
    });

    $("#add,#subtract,#multiply,#divide").on("click", function() {
        opsign = $(this).text();
        if (screen[screen.length - 1] !== opsign) {
            screen.push(opsign);
        }
        $("#display").html(screen);

    });

    $("#decimal").on("click", function() {

        dotted = $(this).text();
        if (screen.length == 0) {
            screen.push(0);
            $("#display").html(screen);

        }


        if (screen[screen.length - 1] !== dotted) {
            if (!/\.$/.test(screen)) {
                screen.push(dotted);
                $("#display").html(screen);
            }
        }



    });


    $("#equals").on("click", function() {
        var calc = eval($("#display").text());
        screen = [eval(calc)];

        if (calc.toString().length > 4 && calc < 99999) {
            calc = calc.toFixed(5);
        }

        $("#display").html(screen);

    });

    $("#clear").on("click", function reset() {
        screen = [];
        $("#display").html("0");

    });

});