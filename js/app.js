var allSquares = document.getElementsByClassName('square')
var battleship = allSquares[Math.floor(Math.random() * allSquares.length)]
var submarine = allSquares[Math.floor(Math.random() * allSquares.length)]
var destroyer = allSquares[Math.floor(Math.random() * allSquares.length)]
  battleship.className += ' ship'
  submarine.className += ' ship'
  destroyer.className += ' ship'
var allShips = document.getElementsByClassName('ship')

var explosion = 'explosion.jpg'
console.log(explosion)






battleship.addEventListener('click', function(){
  console.log('Battleship hit!')
  console.log(battleship.innerHTML = 'hello')
})

destroyer.addEventListener('click', function(){
  console.log('Destroyer hit!')
})

submarine.addEventListener('click', function(){
  console.log('Submarine hit!')
})


// for(var i=0; i< allSquares.length; i++) {
//       allSquares[i].className += ' no ship'
//        allSquares[i].addEventListener("click", bindClick(i));
//
//  }
//
//  function bindClick(i) {
//     return function(){
//              console.log("you clicked region number " + i)
//            }
//  }
