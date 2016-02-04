var scoreOne = document.getElementById('player1');
var scoreTwo = document.getElementById('player2');
var allSquares = document.getElementsByClassName('square')
var battleship = allSquares[Math.floor(Math.random() * allSquares.length)]
// var submarine = allSquares[Math.floor(Math.random() * allSquares.length)]
var submarine = allSquares[21]



var destroyer = allSquares[Math.floor(Math.random() * allSquares.length)]
var allShips = document.getElementsByClassName('ship')
  battleship.className += ' ship'
  submarine.className += ' ship'
  destroyer.className += ' ship'



  var freshBoat = []
  var boat = []
  var boatChoose = [Math.floor(Math.random() * allSquares.length)]
  var boatNum = boatChoose[0]

  makeBoat()
  var longSubmarine = []
   longSubmarine[0] = allSquares[boat[0]]
   longSubmarine[1] = allSquares[boat[1]]
   longSubmarine[2] = allSquares[boat[2]]
   longSubmarine[3] = allSquares[boat[3]]

   longSubmarine[0].className += ' ship'
   longSubmarine[1].className += ' ship'
   longSubmarine[2].className += ' ship'
   longSubmarine[3].className += ' ship'

  // var newBoat = allSquares[boat1]
  // var boat1 = makeBoat()

  //
  // for(i = 0; i < 3 ; i ++) {
  //   var other = boat;
  //   var sub[i] = allSquares[boat[i]]
  //   console.log(other)
  // }

  // for (var i = 0; i < 4; i++) {
  //   addOne = boatNum + 1;
  //   addTwo = boatNum + 2;
  //   addThree = boatNum + 3;
  //   boat.push(boatNum);
  //   boat.push(addOne);
  //   boat.push(addTwo);
  //   boat.push(addThree);
  //   console.log(boat);
  // }

  function makeBoat() {
    if (boatNum <= 3 || 7 <= boatNum && boatNum <= 10 || 14 <= boatNum && boatNum <= 17 ||
      21 <= boatNum && boatNum <= 24 || 28 <= boatNum && boatNum <= 31 ||
      35 <= boatNum && boatNum <= 38 || 42 <= boatNum && boatNum <= 45) {
      addOne = boatNum + 1;
      addTwo = boatNum + 2;
      addThree = boatNum + 3;
      boat.push(boatNum);
      boat.push(addOne);
      boat.push(addTwo);
      boat.push(addThree);
    }
    else if (4 <= boatNum && boatNum <= 6 || 11 <= boatNum && boatNum <= 13 ||
      18 <= boatNum && boatNum <= 20) {
      add7 = boatNum + 7;
      add14 = boatNum + 14;
      add21 = boatNum + 21;
      boat.push(boatNum);
      boat.push(add7);
      boat.push(add14);
      boat.push(add21);
      console.log(boat);}
    else {
      sub1 = boatNum - 1;
      sub2 = boatNum - 2;
      sub3 = boatNum - 3;
      boat.push(boatNum);
      boat.push(sub1);
      boat.push(sub2);
      boat.push(sub3);
      console.log(boat);
      }
    return boat;
    }





// console.log([Math.floor(Math.random() * allSquares.length)])

// function allSqRand() {
//   console.log(Math.random() * allSquares.length)
// }

var game = {
  player1: {name: "Player 1",score: 0},
  player2: {name: "Player 2",score: 0}
}
var currentPlayer = game.player1

function incrementScore(){
  currentPlayer.score += 1;
}

$("#player1").css("background-color", "green");

function switchTurn(){
  if(currentPlayer == game.player1){
    currentPlayer = game.player2;
    $("#player1").css("background-color", "red");
    $("#player2").css("background-color", "green");
  } else {
    currentPlayer = game.player1;
    $("#player1").css("background-color", "green");
    $("#player2").css("background-color", "red");
  }
  // return currentPlayer
}

$(allSquares).click(function() {
  if ($(this).hasClass('ship')) {
    $(this).html('<img src="explosion.jpg" alt="boom" />');
    incrementScore();
    $(scoreOne).text('PLAYER 1 SCORE: ' + game.player1.score)
    $(scoreTwo).text('PLAYER 2 SCORE: ' + game.player2.score)
    // console.log(currentPlayer);
  } else {
  $(this).fadeTo('slow', .025);
    switchTurn();
    // console.log(currentPlayer);
  }
})



battleship.addEventListener('click', function(){
  console.log('Battleship hit!')
})
destroyer.addEventListener('click', function(){
  console.log('Destroyer hit!')
})
submarine.addEventListener('click', function(){
  console.log('Submarine hit!')
})
