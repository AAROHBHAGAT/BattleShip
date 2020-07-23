var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while(isSunk==false){

    guess = prompt("Ready, Aim, Fire! (Enter a number from 1-6!) : ");
    
    if(guess < 0 || guess > 6){

        alert("Please Enter A Valid Cell Number!")
    }
    else{
        guesses=guesses+1;
    if(guess == location1 || guess == location2 || guess == location3){
            hits=hits+1;
            alert("HIT!")
        if(hits == 3){
            isSunk = true;
            alert("You Sank My Battleship! Good Job Soldier!")
            }
        }
    }
}

var stats = "You Took " + guesses + " To Sink My Battleship, " + "Which Means Your Shooting Accuracy Was " + (3/guesses);

alert(stats)
