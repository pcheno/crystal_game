    // Creates an array containing the crystal names and initial values
    $(document).ready(function () {
      var crystals = [{
          name: "quartz",
          value: 0
        },
        {
          name: "fluorite",
          value: 0
        },
        {
          name: "hematite",
          value: 0
        },
        {
          name: "amethyst",
          value: 0
        }
      ];


      // Creating variables to hold the number of wins, losses, and ties. They start at 0.
      var game = {
        "wins": $('#wins'),
        "losses": $('#losses'),
        "goalTot": $('#goalTot'),
        "currentTot": $('#currentTot')
      };

      resetCrystals();


      var winFlag = false;
      var trii = -1; //negative identifies first time through

      //funtion to get random numbers
      function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      }

      //function to reset game objects and crystal values
      function resetCrystals() {
        $(game.currentTot).text(0);
        $(game.goalTot).text(randomNum(19, 120));
        for (var i = 0; i < crystals.length; i++) {
          crystals[i].value = randomNum(1, 12);
        }
      }

      $('button').click(function () {

        var buttonPick = $(this)[0];
        var crystalPick = $(buttonPick).attr("id");

        for (var i = 0; i < crystals.length; i++) {
          if (crystalPick == crystals[i].name) {
            var crysValue = crystals[i].value;
            var goalInt = parseInt($(game.goalTot).text());
            var currentInt = parseInt($(game.currentTot).text()) + crysValue;

            $(game.currentTot).text(currentInt);

            if (currentInt > goalInt) {
              var lossesInt = parseInt($(game.losses).text()) + 1;
              $(game.losses).text(lossesInt);
              resetCrystals();
            } else if (currentInt == goalInt) {
              var winsInt = parseInt($(game.wins).text()) + 1;
              $(game.wins).text(winsInt);
              resetCrystals();
            }


            break;
          }
        }

      });


    });

    /*
  at the very beginning of the program [
   (make this a function called reset, we are going to use this again and again)
   create random number for goalTotal (19-120)
   and create random numbers for all crystals (1-12)
]
if not the very beginning [
wait for button clicked[
     (button is clicked)
     get value from button add to currentTotal
     Is currentTotal > goalTotal
          increase ++losses
          do function reset
     else if currentTotal == goalTotal
             increase ++wins
             do function reset

    (out of if logic)
    jQuery out all goalTotal, currentTotal, wins, losses, all crystal values
*/