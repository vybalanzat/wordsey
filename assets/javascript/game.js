
        // array of computer choice

        var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        // variable to hold wins and losses

        var wins = 0;
        var losses = 0;
        var attempts = 10;
        var wrongGuess = [];
        var computerGuess = '';

        // html where we want to display it

        var directionsText = document.getElementById("directions-text");
        var userWinsText = document.getElementById("userWins-text");
        var userLossesText = document.getElementById("userLosses-text");
        var userAttemptText = document.getElementById("userAttempt-text");
        var userWrongGuessText = document.getElementById("userWrongGuess-text");
        var userGuessText = document.getElementById("userGuess-text");

        // for (var i = 0; i < 12; i++) {
        //run when a key is pressed


        document.onkeyup = function (event) {

            var userGuess = event.key;



            if (attempts === 10) {
                computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
            }

            console.log(computerGuess);

            if (userGuess === computerGuess) {
                wins++;
                wrongGuess = [];
                attempts = 10;

            }
            else {
                attempts--;
                wrongGuess.push(userGuess);
                if (attempts === 0) {
                    losses++;
                    wrongGuess = [];
                    attempts = 10;
                }
            }

          
            userWinsText.textContent =  wins;
            userLossesText.textContent =  losses;
            userAttemptText.textContent =  attempts;
            userWrongGuessText.textContent = wrongGuess;


        }
    



