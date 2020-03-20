const check = require('./checkArr')
const store = require('../store')

const xUpdate = function(id){
  $('#message').html('<h2> O turn </h2>')
  $("#"+id+"").removeClass()
  $("#"+id+"").addClass('col-4 box Xtil')
  $("#"+id+"").html("<h1>X</h1>")

}


const oUpdate = function(id){
  $('#message').html('<h2> X turn </h2>')

  $("#"+id+"").removeClass()
  $("#"+id+"").addClass('col-4 box Otil')
  $("#"+id+"").html("<h1>O</h1>")

}

const winner= function(pl){
    $('#message').html('<h2> winner  **  winner *** winner  </h2>')
  $('#message2').html('<h2>Player_'+pl+' win</h2>')
  $('#message2').removeClass()
  $('#message2').addClass("coolback")
}

const goodMove = function(){
  $('#message2').text('you play ')
  $('#message2').removeClass()
    $('#message2').addClass("Otil")
}
const badMove = function(){
  $('#message2').html('<h2>you play there already </h2> ')
  $('#message2').removeClass()
  $('#message2').addClass('Xtil')
}

const restart =function(data){

store.game = data.game

  $('#message2').html('<h2>new game </h2>')
  $('#message2').addClass("coolback")
  for(let i =0;i<9;i++){
    $("#"+i).html('')
    $("#"+i).removeClass()
    $("#"+i).addClass('col-4 col-md-4 box alt-color ')
  }
  //$('#reset-page').addClass('Xtil')
  $('#div-password').addClass('notShow')
}
const noRestart = function (err){
  $('#message2').html('<h2>can not create new game </h2>')
  $('#message2').removeClass()
  $('#message2').addClass('Xtil')
  console.log("the err= "+err)
}
const updateGood = function(data){

}
const updateBad = function(er){
  console.log("something went wrong "+er)
}

const showstatus = function(data){
//const stat = data.game.length
//console.log("this is "+stat)
$('#total-game').html('<h2> Total game play: '+data.games.length+'  </h2>')

}
const showstatusFail = function (err){
  $('#winRatio').html('<h2>could not get status </h2>')
  console.log("fail to report "+ err)
}
const gameOver = function(data){
$('#winRatio').html('<h2> Total game over: '+data.games.length+'  </h2>')

}

const showReport = function (){
  $('#message').html('<h2> report </h2>')
  $('#message').addClass("coolback")
  $('#message2').addClass('notShow')
$('#play-div').addClass('notShow')
  $(' #first-page ').addClass('notShow')
  $('#div-report').removeClass()
    $('#div-password').addClass('notShow')
}

const showgame = function(){
$('#play-div').removeClass()

  $('#div-report').addClass('notShow')
}

const isDraw = function(){
    $('#message2').html('<h2>this is a draw</h2> ')
      $('#message').html('<h2>  </h2>')
}


const over = function(){
      $('#message2').removeClass()
    $('#message2').html('<h2> game is over</h2> ')
    $('#message').html('')
        $('#message2').addClass('xtil')
}

module.exports = {
oUpdate,
xUpdate,
winner,
goodMove,
badMove,
restart,
noRestart,
updateGood,
updateBad,
showstatus,
showstatusFail,
gameOver,
showReport,
showgame,
isDraw,
over
}
