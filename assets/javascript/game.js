$(document).ready(function () {

    var wins = 0;
    var losses = 0;
    var counter = 0;

    function randNum(min,max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max-min +1)) + min;
    }

    var targetNumber = randNum(19,120);
    $("#target").html(targetNumber);

    var crystal1 = randNum(1,12);
    var crystal2 = randNum(1,12);
    var crystal3 = randNum(1,12);
    var crystal4 = randNum(1,12);

    function reset() {
        counter = 0;
        targetNumber = randNum(19,120);
        $("#target").html(targetNumber);
        $("#playerScore").text(counter);
        crystal1 = randNum(1,12);
        crystal2 = randNum(1,12);
        crystal3 = randNum(1,12);
        crystal4 = randNum(1,12);
    }

    $("#greenCrystal").on("click", function() {
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