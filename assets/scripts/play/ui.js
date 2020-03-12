const check = require('./checkArr')
const store = require('../store')

const xUpdate = function(id){
console.log('inside  X update '+id)
  $("#"+id+"").removeClass()
  $("#"+id+"").addClass('col-4 box Xtil')
  $("#"+id+"").html("<h1>X</h1>")

}


const oUpdate = function(id){
  console.log('inside  O update '+id)

  $("#"+id+"").removeClass()
  $("#"+id+"").addClass('col-4 box Otil')
  $("#"+id+"").html("<h1>O</h1>")

}

const winner= function(pl){
  $('#message2').text('Player_'+pl+' win')
  $('#message2').removeClass()
  $('#message2').addClass('Otil')
}

const goodMove = function(){
  $('#message2').text('you play ')
  $('#message2').removeClass()
  $('#message2').addClass('Otil')
}
const badMove = function(){
  $('#message2').html('<h2>you play there already </h2> ')
  $('#message2').removeClass()
  $('#message2').addClass('Xtil')
}

const restart =function(data){
console.log("inside create")
store.game = data.game

  $('#message2').html('<h2>new game </h2>')
  for(let i =0;i<9;i++){
    $("#"+i).html('')
    $("#"+i).removeClass()
    $("#"+i).addClass('col-4 col-md-4 box alt-color')
  }
  //$('#reset-page').addClass('Xtil')
}
const noRestart = function (err){
  $('#message2').html('<h2>can not create new game </h2>')
  $('#message2').removeClass()
  $('#message2').addClass('Xtil')
  console.log("the err= "+err)
}
const updateGood = function(data){
  console.log("id = "+data.game.id)
  console.log("cells = "+data.game.cells)
  console.log("over = "+data.game.over)
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

  $('#sec-page ').addClass('notShow')
  $(' #first-page ').addClass('notShow')
  $('#div-report').removeClass()
}

const showgame = function(){

$('#play-div').removeClass()



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
showgame
}
