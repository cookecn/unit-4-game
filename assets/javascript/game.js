$(document).ready(function () {

    var wins = 0;
    var losses = 0;
    var counter = 0;

    function randNum(min,max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max-min +1)) + min;
        console.log(arguments);
    }

    var targetNumber = randNum(19,120);
    $("#target").html(targetNumber);

    var crystal1 = randNum(2,12);
    var crystal2 = randNum(2,12);
    var crystal3 = randNum(2,12);
    var crystal4 = randNum(2,12);

    function reset() {
        counter = 0;
        targetNumber = randNum(19,120);
        $("#target").html(targetNumber);
        $("#playerScore").text(counter);
        crystal1 = randNum(2,12);
        crystal2 = randNum(2,12);
        crystal3 = randNum(2,12);
        crystal4 = randNum(2,12);
    }

    //make another functiion that changes crystals ranNum when matching other crystals - set 
    //function inside of the $("crystal") tags.

    $("#greenCrystal").on("click", function() {
        /* Trying to find a way to get each crystal to have different values
        if (crystal1 === crystal2) {
            reset(crystal2);
        } 
        if (crsytal1 === crystal3) {
            reset(crystal3);
        }
        if (crystal1 === crystal4) {
            reset(crystal4);
        }*/
        counter += crystal1;
        $(playerScore).text(counter);
        winOrLoss();
    });

    $("#yellowCrystal").on("click", function() {
        counter += crystal2;
        $(playerScore).text(counter);
        winOrLoss();
    });

    $("#redCrystal").on("click", function() {
        counter += crystal3;
        $(playerScore).text(counter);
        winOrLoss();
    });

    $("#purpleCrystal").on("click", function() {
        counter += crystal4;
        $(playerScore).text(counter);
        winOrLoss();
    });

    function winOrLoss() {
        if (counter === targetNumber) {
            wins += 1;
            alert("Winner!");
            $(win).text(wins);
            reset();
        } 
        else if (counter > targetNumber) {
            losses += 1;
            alert("You Lose, Please Try Again!");
            $(loss).text(losses);
            reset();
        }
    }

});