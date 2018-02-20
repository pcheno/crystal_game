$(document).ready(function () {
  // Creates an array containing objects with crystal names and initial values
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


  // Creating variables to hold the number of wins, losses, goal total, and current total.
  var game = {
    "wins": $('#wins'),
    "losses": $('#losses'),
    "goalTot": $('#goalTot'),
    "currentTot": $('#currentTot')
  };

  resetCrystals();

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

    //button is clicked, which one is it?

    var crystalPick = $(this).attr("id");

    //loop through crystals array and find the crystal
    for (var i = 0; i < crystals.length; i++) {
      //we are only interested with the matching crystal
      if (crystalPick == crystals[i].name) {
        var crysValue = crystals[i].value;
        var goalInt = parseInt($(game.goalTot).text());
        //increase current total by the crystals value
        var currentInt = parseInt($(game.currentTot).text()) + crysValue;

        $(game.currentTot).text(currentInt);
        //is current total greater than goal total? If so, increase losses, and reset crystals
        //else if current total is equal, increase wins and reset crystals
        //otherwise keep hitting a crystal button
        if (currentInt > goalInt) {
          var lossesInt = parseInt($(game.losses).text()) + 1;
          $(game.losses).text(lossesInt);
          resetCrystals();
        } else if (currentInt == goalInt) {
          var winsInt = parseInt($(game.wins).text()) + 1;
          $(game.wins).text(winsInt);
          resetCrystals();
        }
        break; //crystal found, no need to keep looping
      }   //if (crystalPick == crystals[i].name) 
    }  //for (var i = 0; i < crystals.length; i++) 

  });  //$('button').click(function () 
});  //$(document).ready(function ()