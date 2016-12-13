$(document).ready(function(){

  //on click on each box
  $('.square').click(function(){
    var playerCheck = toRecordMove($(this).html());

    if(playerCheck === 1){
      $(this).append('<img class="icon" src="img/player1.jpg" alt = "player 1">');
      toChangePlayer();
      $('h3').html(returnString());
      winAlert();
    }
    else if (playerTurn === 2){
      $(this).append('<img class = "icon" src="img/player2.jpg" alt = "player 2">');
      toChangePlayer();
      $('h3').html(returnString());
      winAlert();
    }
  });

  //if win, pop-up box appears
  var winAlert = function(){
    var winner = checkForWins();
    gameEnded();
    if(winner === 1 || winner ===2){
      alert("player " + winner + " wins!");
      resetBoard();
    }
  }

  //var for resetting the board
  var resetBoard = function(){
    $('.square > img').remove();
    toRestart();
  }


})
