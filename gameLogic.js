//variables for the game
var board = [null,null,null,null,null,null,null,null,null];

//function toChangePlayer
var playerTurn = 1;

var toChangePlayer = function(){
  if(playerTurn === 1){
    playerTurn = 2;
  }else if(playerTurn === 2){
    playerTurn = 1;
  }
  console.log("player turn: " + playerTurn);
  return playerTurn;
}

//function to change String in h3
var returnString = function(){
  return "player " + playerTurn + "'s turn";
}

//function toRestart
var toRestart = function(){
  board = [null,null,null,null,null,null,null,null,null];
  playerTurn = 1;
}

//function toRecordMove
var toRecordMove = function(index){
  if(board[index]!==null){
    alert("move is not valid!");
    return null;
  }else{
    board[index]=playerTurn;
    //just to check
    console.log(board);
    return playerTurn;

  }
}

//function checkForWins, returns player who wins. if no winner, return 0.
var checkForWins = function(){
  console.log("checkForWins running");
  if((board[0] !== null) && board[0]===board[1] && board[1]===board[2]){
    return board[0];
  }
  if((board[3] !== null) && board[3]===board[4] && board[4]===board[5]){
    return board[3];
  }
  if((board[6] !== null) && board[6]===board[7] && board[7]===board[8]){
    return board[6];
  }
  if((board[0] !== null) && board[0]===board[3] && board[3]===board[6]){
    return board[0];
  }
  if((board[1] !== null) && board[1]===board[4] && board[4]===board[7]){
    return board[1];
  }
  if((board[2] !== null) && board[2]===board[5] && board[5]===board[8]){
    return board[2];
  }
  if((board[0] !== null) && board[0]===board[4] && board[4]===board[8]){
    return board[0];
  }
  if((board[2] !== null) && board[2]===board[4] && board[4]===board[6]){
    return board[2];
  }
  return 0;
}

//function checking if game has ended
var gameEnded = function(){
  var count = 0;
  for(var i=0; i<board.length; i++){
    if(board[i] === null){
      count++;
    }
  }
  console.log("count: " + count);
  if(checkForWins() === 0){
    console.log("game still continue");
    return false;
  }
  if(count === 0){
    console.log("game still continue");
    return false;
  }

  console.log("game ended!");
  return true;
}
