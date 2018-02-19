    // Creates an array containing the crystal names.
    
    var crystalsArr = ["quartz","fluorite","hematite","amethyst"]
    
    
    // Creating variables to hold the number of wins, losses, and ties. They start at 0.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];




    var game = {
      "wins": 0,
      "losses": 0,
      "goalTot": 0,
      "currentTot":0,

    };
    var band = {
      "pict": computerGuess.image,
      "song": computerGuess.song
    }

    var html = "";
    var winFlag = false;
    var trii = -1; //negative identifies first time through

    //function to recreate the display word
    function createDisStr() {
      game.disStr = computerGuess.name;
      for (var i = 0; i < computerGuess.name.length; i++) {
        if ((game.guessStr.includes(computerGuess.name[i]) == false) && (computerGuess.name[i] != " ")) {
          //letter of computerguess is NOTin the list of guessed letters. hide it "-"
          game.disStr = game.disStr.replace(computerGuess.name[i], "-");
        }
      }
    }

    // This function is run whenever the user presses a key.
    document.onkeyup = function (event) {

      game.guess = event.key.toUpperCase();

      //check to see if we are just starting or have been playing
      if (trii !== -1) {
        // If we choose the same thing as the computer, modify varibles

        //if we have not guessed the letter before...keep on going.
        if (!game.guessStr.includes(game.guess)) {
          // add guess to guessStr
          if (game.guessStr == "") {
            game.guessStr = " " + game.guess;
          } else {
            game.guessStr = game.guessStr + "," + game.guess;
          }

          //is letter contained in the word?

          if (computerGuess.name.includes(game.guess)) {
            // now add letter to guessStr, loop through computerguess by letter checking for the letter in guessStr
            //while looping through recreate disStr. When disStr equals computerguess thats a win

            createDisStr();

          } else { //(found == true) guess is in the word the else is not in the word

            trii++;
            game.guessLeft--;

          } // guess is not in word
          if (game.disStr == computerGuess.name) {
            game.wins++;
            winFlag = true;
            //and start the game over.
            trii = 12;
          }



        } //(guessed == false) new letter pressed
      } // (trii !== -1)
      //Was it the 12th try.If so, reset varibles, and check for a loss

      if (trii > 11) {
        game.guessLeft = 12;
        game.guessStr = "";
        trii = 0;
        // debugger
        //this is where img and audio get updated.
        var img = `<div class='col-6'><img src=${computerGuess.image} />`

        var audio = `<audio controls='controls' autoplay><source src='${computerGuess.song}' type='audio/mp3'/></audio></div>`
        html = img + audio

        document.querySelector("#band").innerHTML = html;

        game.band = computerGuess.name;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        createDisStr();

        if (winFlag == false) {
          game.losses++;
        } else {
          winFlag = false;
        }
      } else {
        if (trii < 0) {
          //first time the game is just starting.
          trii = 0;
          createDisStr();
        }
      }


      // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses,
      // and wins/losses/guesses left/string of guesses.
      /*
      html =
        "<p>Wins: " + game.wins + "</p>" +
        "<p>Losses: " + game.losses + "</p>" +
        "<p>Guesses Left: " + game.guessLeft + "</p>" +
        "<p>Guessed Letters: " + game.guessStr + "</p>" +
        "<p>Current word: " + game.disStr + "</p>" +
        "<p>Band: " + game.band + "</p>";
      */
      // Set the inner HTML contents of the #game div to our html string
     // document.querySelector("#game").innerHTML = html;
    }