var scoreOne = document.getElementById('player1');
var scoreTwo = document.getElementById('player2');
var allSquares = document.getElementsByClassName('square')
var battleship = allSquares[Math.floor(Math.random() * allSquares.length)]
var submarine = allSquares[Math.floor(Math.random() * allSquares.length)]
var destroyer = allSquares[Math.floor(Math.random() * allSquares.length)]
var allShips = document.getElementsByClassName('ship')
  battleship.className += ' ship'
  submarine.className += ' ship'
  destroyer.className += ' ship'

console.log([Math.floor(Math.random() * allSquares.length)])

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
