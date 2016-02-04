var scoreOne = document.getElementById('player1');
var scoreTwo = document.getElementById('player2');
var allSquares = document.getElementsByClassName('square')

var battleArray = []
var battleChoose = [Math.floor(Math.random() * allSquares.length)]
var battleNum = battleChoose[0]

  makeBattle()
  var longBattleship = []
   longBattleship[0] = allSquares[battleArray[0]]
   longBattleship[1] = allSquares[battleArray[1]]
   longBattleship[2] = allSquares[battleArray[2]]
   longBattleship[3] = allSquares[battleArray[3]]

   longBattleship[0].className += ' ship'
   longBattleship[1].className += ' ship'
   longBattleship[2].className += ' ship'
   longBattleship[3].className += ' ship'

  function makeBattle() {
    if (battleNum <= 3 || 7 <= battleNum && battleNum <= 10 || 14 <= battleNum && battleNum <= 17 ||
      21 <= battleNum && battleNum <= 24 || 28 <= battleNum && battleNum <= 31 ||
      35 <= battleNum && battleNum <= 38 || 42 <= battleNum && battleNum <= 45) {
      addOne = battleNum + 1;
      addTwo = battleNum + 2;
      addThree = battleNum + 3;
      battleArray.push(battleNum);
      battleArray.push(addOne);
      battleArray.push(addTwo);
      battleArray.push(addThree);
    }
    else if (4 <= battleNum && battleNum <= 6 || 11 <= battleNum && battleNum <= 13 ||
      18 <= battleNum && battleNum <= 20) {
      add7 = battleNum + 7;
      add14 = battleNum + 14;
      add21 = battleNum + 21;
      battleArray.push(battleNum);
      battleArray.push(add7);
      battleArray.push(add14);
      battleArray.push(add21);
    }
    else {
      sub1 = battleNum - 1;
      sub2 = battleNum - 2;
      sub3 = battleNum - 3;
      battleArray.push(battleNum);
      battleArray.push(sub1);
      battleArray.push(sub2);
      battleArray.push(sub3);
      }
    return battleArray;
    }

    var subArray = []
    var subChoose = [Math.floor(Math.random() * allSquares.length)]
    var subNum = subChoose[0]

    makeSub()
    var longSubmarine = []
     longSubmarine[0] = allSquares[subArray[0]]
     longSubmarine[1] = allSquares[subArray[1]]
     longSubmarine[2] = allSquares[subArray[2]]

     longSubmarine[0].className += ' ship'
     longSubmarine[1].className += ' ship'
     longSubmarine[2].className += ' ship'

    function makeSub() {
      if (subNum <= 3 || 7 <= subNum && subNum <= 10 || 14 <= subNum && subNum <= 17 ||
        21 <= subNum && subNum <= 24 || 28 <= subNum && subNum <= 31 ||
        35 <= subNum && subNum <= 38 || 42 <= subNum && subNum <= 45) {
        addOne = subNum + 1;
        addTwo = subNum + 2;
        addThree = subNum + 3;
        subArray.push(subNum);
        subArray.push(addOne);
        subArray.push(addTwo);
      }
      else if (4 <= subNum && subNum <= 6 || 11 <= subNum && subNum <= 13 ||
        18 <= subNum && subNum <= 20) {
        add7 = subNum + 7;
        add14 = subNum + 14;
        add21 = subNum + 21;
        subArray.push(subNum);
        subArray.push(add7);
        subArray.push(add14);
      }
      else {
        sub1 = subNum - 1;
        sub2 = subNum - 2;
        sub3 = subNum - 3;
        subArray.push(subNum);
        subArray.push(sub1);
        subArray.push(sub2);
        }
      return subArray;
      }

      var destroyerArray = []
      var destroyerChoose = [Math.floor(Math.random() * allSquares.length)]
      var destroyerNum = destroyerChoose[0]

    makeDestroy()
    var longDestroyer = []
     longDestroyer[0] = allSquares[destroyerArray[0]]
     longDestroyer[1] = allSquares[destroyerArray[1]]
     longDestroyer[2] = allSquares[destroyerArray[2]]

     longDestroyer[0].className += ' ship'
     longDestroyer[1].className += ' ship'
     longDestroyer[2].className += ' ship'

    function makeDestroy() {
      if (destroyerNum <= 3 || 7 <= destroyerNum && destroyerNum <= 10 || 14 <= destroyerNum && destroyerNum <= 17 ||
        21 <= destroyerNum && destroyerNum <= 24 || 28 <= destroyerNum && destroyerNum <= 31 ||
        35 <= destroyerNum && destroyerNum <= 38 || 42 <= destroyerNum && destroyerNum <= 45) {
        addOne = destroyerNum + 1;
        addTwo = destroyerNum + 2;
        addThree = destroyerNum + 3;
        destroyerArray.push(destroyerNum);
        destroyerArray.push(addOne);
        destroyerArray.push(addTwo);
      }
      else if (4 <= destroyerNum && destroyerNum <= 6 || 11 <= destroyerNum && destroyerNum <= 13 ||
        18 <= destroyerNum && destroyerNum <= 20) {
        add7 = destroyerNum + 7;
        add14 = destroyerNum + 14;
        add21 = destroyerNum + 21;
        destroyerArray.push(destroyerNum);
        destroyerArray.push(add7);
        destroyerArray.push(add14);
      }
      else {
        sub1 = destroyerNum - 1;
        sub2 = destroyerNum - 2;
        sub3 = destroyerNum - 3;
        destroyerArray.push(destroyerNum);
        destroyerArray.push(sub1);
        destroyerArray.push(sub2);
        }
      return destroyerArray;
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
    $(scoreOne).text('PLAYER 1 SCORE: ' + game.player1.score);
    $(scoreTwo).text('PLAYER 2 SCORE: ' + game.player2.score);
    // console.log(currentPlayer);
  } else {
  $(this).fadeTo('slow', .025);
    switchTurn();
  }
})

// var battleship = allSquares[Math.floor(Math.random() * allSquares.length)]
// // var submarine = allSquares[Math.floor(Math.random() * allSquares.length)]
// var submarine = allSquares[21]



// var destroyer = allSquares[Math.floor(Math.random() * allSquares.length)]
// var allShips = document.getElementsByClassName('ship')
//   battleship.className += ' ship'
//   submarine.className += ' ship'
//   destroyer.className += ' ship'


// battleship.addEventListener('click', function(){
//   console.log('Battleship hit!')
// })
// destroyer.addEventListener('click', function(){
//   console.log('Destroyer hit!')
// })
// submarine.addEventListener('click', function(){
//   console.log('Submarine hit!')
// })


  // var newBoat = allSquares[boat1]
  // var boat1 = makeBoat()

  //
  // for(i = 0; i < 3 ; i ++) {
  //   var other = boat;
  //   var sub[i] = allSquares[boat[i]]
  //   console.log(other)
  // }

  // for (var i = 0; i < 4; i++) {
  //   addOne = battleNum + 1;
  //   addTwo = battleNum + 2;
  //   addThree = battleNum + 3;
  //   boat.push(battleNum);
  //   boat.push(addOne);
  //   boat.push(addTwo);
  //   boat.push(addThree);
  //   console.log(boat);
  // }
