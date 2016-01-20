'use strict'

var ref = new Firebase('https://gameredux.firebaseio.com/');
console.log(ref);
var amOnline = ref.child('info/connected');
var playersRef = ref.child('players');
var gameRef = ref.child('game_state');
var playerTurn = true;
var player, mark;

// var currentPlayerRef = ref.child('currentPlayer');

$(document).ready(init);

function init() {
  $('#username').click(enterName);
  console.log('hi');
  $('.square').click(clickSquare);
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

  clickSquare();
  console.log('working');
}

function clickSquare() {
currentPlayerRef.once('value', function(snapshot) {
  if (playerTurn === player){  // is it my turn
    var index = $(this).attr('data');
    }
  })
    var newState = {};
    newState[index] = player === player1 ? 1 : 0;
    gameRef.update(newState);
    var mark = $(this).text();
    if (player === player1) {
      mark = "Exes";
    } else {
      mark = "Ohs";
    }
    ref.child('turn').set(player === player1 ? player2 : player1);
  }

function enterName() {
  $('#username').val();
  playersRef.once('value', function(snapshot) {

    if(!snapshot.val()) {
      playersRef.push($({player1: $('#username').val()}));
      player = 'player1';
      var currentPlayer = "Exes";
      console.log(currentPlayer);
      debugger;
      $('#namePlayer').text("You are" + currentPlayer);
    }
    else if (Object.keys(snapshot.val()).length === 1) {
      playersRef.push({player2: $('#username').val()});
      player = 'player2';
      var currentPlayer = "Ohs";
      $('#namePlayer').text("You are" + currentPlayer);
      startGame();
    }
    else {
      return;
    }
  });
}

// function checkForWin() {
//
//   var possibleWins = [[1,2,3],[3,6,9],[7,8,9],[1,4,7],[1,5,9],[2,5,8],[3,5,7],[4,5,6]];
//   var $messageWin = "You Win";
//   $('h1').append($messageWin).addClass('header');
//   resetGame();
// }
//
// function resetGame() {
//
// }
