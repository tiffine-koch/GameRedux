'use strict'

// var timestamp = Date.now();
var ref = new Firebase('https://gameredux.firebaseio.com/');
console.log(ref);
var amOnline = ref.child('info/connected');
// var usersRef = ref.child('users');
var playersRef = ref.child('players');
// var userID = usersRef.child(timestamp);
var gameRef = ref.child('game_state');
var myTurn = true;
var currentPlayerRef = ref.child('currentPlayer');
var player, currentPlayer, myTurn;
var $gameBoard;


$(document).ready(init);
//   $('#start').on('click', startGame);
// });

function init() {
  $('#username').click(enterName);
  //psuedocode
  console.log('hi');
  $('.box').click(markSquare);
  //monitor
  ref.child('turn').on('value', function(snap) {
    var playerTurn = snap.val();
    if (!playerTurn) {
      return;
    }
  })
}

function startGame() {
  ref.child('turn').set('player1');
  var squareArray = [0,0,0,0,0,0,0,0,0];
  gameRef.set(squareArray);
  // var userid = $('#start').val();
  // var userid = $('#start').val();
  markSquare();
  console.log('working');
}

function markSquare(){
  if(myTurn !== player) {
    return;
  } if (myTurn === player)
    if (player1 = true) {
    var index = $(this).attr('data');
    gameRef.once('value', function(snapshot) {
      var state = snap.val();
      state[index - 1] = 1;
      gameRef.set(state);
    } ref.child('turn').set(player2);
  } if(player2 = true) {
    var index = $(this).attr('data');
    gameRef.once('value', function(snapshot) {
      var state = snap.val();
      state[index - 1] = 2;
      gameRef.set(state);
    }
  } ref.child('turn').set(player1);
  }
}
function enterName() {
  // $('#username').val();
  playersRef.once('value', function(snapshot) {
    // console.log(snapshot.val());
    if(!snapshot.val()) {
      playersRef.push($({player1: $('#username').val()}));
      player = 'player1';
    }
    else if (Object.keys(snapshot.val()).length === 1) {
      playersRef.push({player2: $('#username').val()});
      player = 'player2';
      startGame();
    }
    else {
      return;
    }
  });
}

function checkForWin() {

  var possibleWins = [[1,2,3],[3,6,9],[7,8,9],[1,4,7],[1,5,9],[2,5,8],[3,5,7],[4,5,6]];
}
