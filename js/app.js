var game = {
  player1: {
    name: "Player 1",
    score: 0
  },
  player2: {
    name: "Player 2",
    score: 0
  }
}

var currentPlayer = game.player1

function switchTurn(){
  if(currentPlayer == game.player1){
    currentPlayer = game.player2
  } else {
    currentPlayer = game.player1
  }
  return currentPlayer
}

function incrementScore(){
  currentPlayer.score += 1
}

var allSquares = document.getElementsByClassName('square')
var battleship = allSquares[Math.floor(Math.random() * allSquares.length)]
var submarine = allSquares[Math.floor(Math.random() * allSquares.length)]
var destroyer = allSquares[Math.floor(Math.random() * allSquares.length)]

  battleship.className += ' ship'
  submarine.className += ' ship'
  destroyer.className += ' ship'

var allShips = document.getElementsByClassName('ship')




$(allSquares).click(function() {
  if ($(this).hasClass('ship')) {
    $(this).html('<img src="explosion.jpg" alt="boom" />')
    incrementScore()
    
  } else {
  $(this).fadeTo('slow', .025)}
  switchTurn()
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
