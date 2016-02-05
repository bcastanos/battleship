var scoreOne = document.getElementById('player1');
var scoreTwo = document.getElementById('player2');
var allSquares = document.getElementsByClassName('square')
var boom = $('#explosionSound')[0]
var introMessage = $('#intro')
var winMessage = $('#message')

      winMessage.hide()
      $(introMessage).click(function() {
      introMessage.hide(1000)})
      $("#player1").css("background-color", "green");

      function randomRanged(min,max){return Math.floor(Math.random()*(max-min+1)+min)}

      var limitedBattleArray = []
      var limitedBattleChoose = [randomRanged(0,13)]
      var limitedBattleNum = limitedBattleChoose[0]

  makeLimitedBattle()

  function makeLimitedBattle() {
    if (limitedBattleNum <= 3 || 7 <= limitedBattleNum && limitedBattleNum <= 10){
      addOne = limitedBattleNum + 1;
      addTwo = limitedBattleNum + 2;
      addThree = limitedBattleNum + 3;
      limitedBattleArray.push(limitedBattleNum);
      limitedBattleArray.push(addOne);
      limitedBattleArray.push(addTwo);
      limitedBattleArray.push(addThree);
    }
    else {
      sub1 = limitedBattleNum - 1;
      sub2 = limitedBattleNum - 2;
      sub3 = limitedBattleNum - 3;
      limitedBattleArray.push(limitedBattleNum);
      limitedBattleArray.push(sub1);
      limitedBattleArray.push(sub2);
      limitedBattleArray.push(sub3);
    }
    return limitedBattleArray;
    }

      var longBattleship = []
         longBattleship[0] = allSquares[limitedBattleArray[0]]
         longBattleship[1] = allSquares[limitedBattleArray[1]]
         longBattleship[2] = allSquares[limitedBattleArray[2]]
         longBattleship[3] = allSquares[limitedBattleArray[3]]

         longBattleship[0].className += ' ship'
         longBattleship[1].className += ' ship'
         longBattleship[2].className += ' ship'
         longBattleship[3].className += ' ship'

      var subArray = []
      var subChoose = [randomRanged(14,20)]
      var subNum = subChoose[0]

    makeSub()

    function makeSub() {
        add7 = subNum + 7;
        add14 = subNum + 14;
        subArray.push(subNum);
        subArray.push(add7);
        subArray.push(add14);
        return subArray;
      }

      var longSubmarine = []
         longSubmarine[0] = allSquares[subArray[0]]
         longSubmarine[1] = allSquares[subArray[1]]
         longSubmarine[2] = allSquares[subArray[2]]

         longSubmarine[0].className += ' ship'
         longSubmarine[1].className += ' ship'
         longSubmarine[2].className += ' ship'



      var destroyerArray = []
      var destroyerChoose = [randomRanged(35,41)]
      var destroyerNum = destroyerChoose[0]

    makeDestroy()

    function makeDestroy() {
      if (35 <= destroyerNum && destroyerNum <= 39) {
        addOne = destroyerNum + 1;
        addTwo = destroyerNum + 2;
        addThree = destroyerNum + 3;
        destroyerArray.push(destroyerNum);
        destroyerArray.push(addOne);
        destroyerArray.push(addTwo);
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

      var longDestroyer = []
       longDestroyer[0] = allSquares[destroyerArray[0]]
       longDestroyer[1] = allSquares[destroyerArray[1]]
       longDestroyer[2] = allSquares[destroyerArray[2]]

       longDestroyer[0].className += ' ship'
       longDestroyer[1].className += ' ship'
       longDestroyer[2].className += ' ship'



      var carrierArray = []
      var carrierChoose = [randomRanged(42,48)]
      var carrierNum = carrierChoose[0]

    makeCarrier()

    var longCarrier = []
     longCarrier[0] = allSquares[carrierArray[0]]
     longCarrier[1] = allSquares[carrierArray[1]]
     longCarrier[2] = allSquares[carrierArray[2]]

     longCarrier[0].className += ' ship'
     longCarrier[1].className += ' ship'
     longCarrier[2].className += ' ship'

    function makeCarrier() {
      if (42 <= carrierNum && carrierNum <= 45) {
        addOne = carrierNum + 1;
        addTwo = carrierNum + 2;
        carrierArray.push(carrierNum);
        carrierArray.push(addOne);
        carrierArray.push(addTwo);
      }
      else {
        sub1 = carrierNum - 1;
        sub2 = carrierNum - 2;
        sub3 = carrierNum - 3;
        carrierArray.push(carrierNum);
        carrierArray.push(sub1);
        carrierArray.push(sub2);
        }
      return carrierArray;
      }

      var longDestroyer = []
       longDestroyer[0] = allSquares[destroyerArray[0]]
       longDestroyer[1] = allSquares[destroyerArray[1]]
       longDestroyer[2] = allSquares[destroyerArray[2]]

       longDestroyer[0].className += ' ship'
       longDestroyer[1].className += ' ship'
       longDestroyer[2].className += ' ship'

//////////////////////////////////////////////////////////////////////////////

var game = {
  player1: {name: "Player 1",score: 0},
  player2: {name: "Player 2",score: 0}
}
var currentPlayer = game.player1


      function incrementScore(){currentPlayer.score += 1;}

      function switchTurn(){
        if(currentPlayer == game.player1){
          currentPlayer = game.player2;
          $("#player1").css("background-color", "red");
          $("#player2").css("background-color", "green");
        } else {
          currentPlayer = game.player1;
          $("#player1").css("background-color", "green");
          $("#player2").css("background-color", "red");
        }}

      function checkWinner() {
        if ((game.player1.score + game.player2.score) > 12) {
          if (game.player1.score > game.player2.score) {
            winMessage.html('<p>Player 1 Wins!</p> <p>Click to play again...</p>');
            winMessage.show(1000);
            }
          else {
            winMessage.html('<p>Player 2 Wins!</p> <p>Click to play again...</p>');
            winMessage.show(1000);
          }}
        else {}
      }

        $(allSquares).click(function() {
          if ($(this).hasClass('ship')) {
            $(this).html('<img src="explosion.jpg" alt="boom" />');
            boom.play();
            incrementScore();
            $(scoreOne).text('PLAYER 1 SCORE: ' + game.player1.score);
            $(scoreTwo).text('PLAYER 2 SCORE: ' + game.player2.score);
            checkWinner();
            $(this).off('click');
            // console.log(currentPlayer);
          } else {
          $(this).fadeTo('slow', .025);
            switchTurn();
            $(this).off('click');
          }
        })

        $(winMessage).click(function(){
          gameReset();
        })

        function gameReset () {
          $(allSquares).fadeTo('slow', 1);
          $(allSquares).html('');
          $(scoreOne).text('PLAYER 1 SCORE: 0');
          $(scoreTwo).text('PLAYER 2 SCORE: 0');
          winMessage.hide(1000);
          window.location.reload();
        }


// var battleship = allSquares[Math.floor(Math.random() * allSquares.length)]
// // var submarine = allSquares[Math.floor(Math.random() * allSquares.length)]
// var submarine = allSquares[21]



// var destroyer = allSquares[Math.floor(Math.random() * allSquares.length)]
// var allShips = document.getElementsByClassName('ship')
//   battleship.className += ' ship'
//   submarine.className += ' ship'
//   destroyer.className += ' ship'

// INITIAL SHIP ARRAYS

// var battleArray = []
// var battleChoose = [Math.floor(Math.random() * allSquares.length)]
// var battleNum = battleChoose[0]

  // makeBattle()
  // var longBattleship = []
  //  longBattleship[0] = allSquares[battleArray[0]]
  //  longBattleship[1] = allSquares[battleArray[1]]
  //  longBattleship[2] = allSquares[battleArray[2]]
  //  longBattleship[3] = allSquares[battleArray[3]]
  //
  //  longBattleship[0].className += ' ship'
  //  longBattleship[1].className += ' ship'
  //  longBattleship[2].className += ' ship'
  //  longBattleship[3].className += ' ship'
  //
  // function makeBattle() {
  //   if (battleNum <= 3 || 7 <= battleNum && battleNum <= 10 || 14 <= battleNum && battleNum <= 17 ||
  //     21 <= battleNum && battleNum <= 24 || 28 <= battleNum && battleNum <= 31 ||
  //     35 <= battleNum && battleNum <= 38 || 42 <= battleNum && battleNum <= 45) {
  //     addOne = battleNum + 1;
  //     addTwo = battleNum + 2;
  //     addThree = battleNum + 3;
  //     battleArray.push(battleNum);
  //     battleArray.push(addOne);
  //     battleArray.push(addTwo);
  //     battleArray.push(addThree);
  //   }
  //   else if (4 <= battleNum && battleNum <= 6 || 11 <= battleNum && battleNum <= 13 ||
  //     18 <= battleNum && battleNum <= 20) {
  //     add7 = battleNum + 7;
  //     add14 = battleNum + 14;
  //     add21 = battleNum + 21;
  //     battleArray.push(battleNum);
  //     battleArray.push(add7);
  //     battleArray.push(add14);
  //     battleArray.push(add21);
  //   }
  //   else {
  //     sub1 = battleNum - 1;
  //     sub2 = battleNum - 2;
  //     sub3 = battleNum - 3;
  //     battleArray.push(battleNum);
  //     battleArray.push(sub1);
  //     battleArray.push(sub2);
  //     battleArray.push(sub3);
  //     }
  //   return battleArray;
  //   }

  // var subArray = []
  // var subChoose = [Math.floor(Math.random() * allSquares.length)]
  // var subNum = subChoose[0]
  //
  // makeSub()
  // var longSubmarine = []
  //  longSubmarine[0] = allSquares[subArray[0]]
  //  longSubmarine[1] = allSquares[subArray[1]]
  //  longSubmarine[2] = allSquares[subArray[2]]
  //
  //  longSubmarine[0].className += ' ship'
  //  longSubmarine[1].className += ' ship'
  //  longSubmarine[2].className += ' ship'
  //
  // function makeSub() {
  //   if (subNum <= 3 || 7 <= subNum && subNum <= 10 || 14 <= subNum && subNum <= 17 ||
  //     21 <= subNum && subNum <= 24 || 28 <= subNum && subNum <= 31 ||
  //     35 <= subNum && subNum <= 38 || 42 <= subNum && subNum <= 45) {
  //     addOne = subNum + 1;
  //     addTwo = subNum + 2;
  //     addThree = subNum + 3;
  //     subArray.push(subNum);
  //     subArray.push(addOne);
  //     subArray.push(addTwo);
  //   }
  //   else if (4 <= subNum && subNum <= 6 || 11 <= subNum && subNum <= 13 ||
  //     18 <= subNum && subNum <= 20) {
  //     add7 = subNum + 7;
  //     add14 = subNum + 14;
  //     add21 = subNum + 21;
  //     subArray.push(subNum);
  //     subArray.push(add7);
  //     subArray.push(add14);
  //   }
  //   else {
  //     sub1 = subNum - 1;
  //     sub2 = subNum - 2;
  //     sub3 = subNum - 3;
  //     subArray.push(subNum);
  //     subArray.push(sub1);
  //     subArray.push(sub2);
  //     }
  //   return subArray;
  //   }

//   var destroyerArray = []
//   var destroyerChoose = [Math.floor(Math.random() * allSquares.length)]
//   var destroyerNum = destroyerChoose[0]
//
// makeDestroy()
// var longDestroyer = []
//  longDestroyer[0] = allSquares[destroyerArray[0]]
//  longDestroyer[1] = allSquares[destroyerArray[1]]
//  longDestroyer[2] = allSquares[destroyerArray[2]]
//
//  longDestroyer[0].className += ' ship'
//  longDestroyer[1].className += ' ship'
//  longDestroyer[2].className += ' ship'
//
// function makeDestroy() {
//   if (destroyerNum <= 3 || 7 <= destroyerNum && destroyerNum <= 10 || 14 <= destroyerNum && destroyerNum <= 17 ||
//     21 <= destroyerNum && destroyerNum <= 24 || 28 <= destroyerNum && destroyerNum <= 31 ||
//     35 <= destroyerNum && destroyerNum <= 38 || 42 <= destroyerNum && destroyerNum <= 45) {
//     addOne = destroyerNum + 1;
//     addTwo = destroyerNum + 2;
//     addThree = destroyerNum + 3;
//     destroyerArray.push(destroyerNum);
//     destroyerArray.push(addOne);
//     destroyerArray.push(addTwo);
//   }
//   else if (4 <= destroyerNum && destroyerNum <= 6 || 11 <= destroyerNum && destroyerNum <= 13 ||
//     18 <= destroyerNum && destroyerNum <= 20) {
//     add7 = destroyerNum + 7;
//     add14 = destroyerNum + 14;
//     add21 = destroyerNum + 21;
//     destroyerArray.push(destroyerNum);
//     destroyerArray.push(add7);
//     destroyerArray.push(add14);
//   }
//   else {
//     sub1 = destroyerNum - 1;
//     sub2 = destroyerNum - 2;
//     sub3 = destroyerNum - 3;
//     destroyerArray.push(destroyerNum);
//     destroyerArray.push(sub1);
//     destroyerArray.push(sub2);
//     }
//   return destroyerArray;
//   }
