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
  } else {
  $(this).fadeTo('slow', .025)}
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
