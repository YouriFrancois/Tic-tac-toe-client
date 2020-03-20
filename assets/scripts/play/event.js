

const ui= require('./ui')
const check = require('./checkArr')
const api = require('./api')
const datax = require ('./gameData')
let isX=true;
let play =true
let cpu = false
const ai = require('./ai')
const tic=['','','','','','','','','']



const clickOn = function (event) {
let id=event.target.id

if(tic[id]===''&& play){

  if(isX){
ui.xUpdate(id)
  tic[id]="X";
  if(check.isOver(tic)  ){
  ui.winner('X')
  play = false
  api.update(datax.sendData(id,'x',!play))
  .then(ui.updateGood)
  .catch(ui.updateBad)
  return ''
  }//==================================
api.update(datax.sendData(id,'x',!play))
.then(ui.updateGood)
.catch(ui.updateBad)
  //===============================================
    isX =false // switch user
}
else
{
  //------ local -----
  if (cpu === false){
ui.oUpdate(id)
  tic[id]="O";
if(check.isOver(tic) ){
ui.winner('0') // the the user they won
play = false
}
api.update(datax.sendData(id,'o',!play))
.then(ui.updateGood)
.catch(ui.updateBad)
  isX = true
}

}
// ---------- CPU ---------------

if (cpu === true){
let aiId = ai.aiMove(tic)

ui.oUpdate(aiId)
  tic[aiId]="O";

if(check.isOver(tic) ){
ui.winner('0') // the the user they won
play = false
}
api.update(datax.sendData(aiId,'o',!play))
.then(ui.updateGood)
.catch(ui.updateBad)
if(play)  isX = true
}
  //=======================

if(play)
ui.goodMove()
if (check.draw(tic)){
  if(play)  {ui.isDraw()}
  play = false

}


}else{
  if(play===false) ui.over()

  if(play) ui.badMove()
}

}

  //===============================================
const restart = function(){
  ui.showgame()

//const data=''
api.createGame({})
.then(ui.restart)
.catch(ui.noRestart)
check.erase(tic);
play =true;
isX=true;
  cpu=false
    $('#message').html('<h2> 2 players  </h2>')
}

const vsCpu =function(){
  cpu=true
  ui.showgame()
//const data=''
api.createGame({})
.then(ui.restart)
.catch(ui.noRestart)
check.erase(tic);
play =true;
isX=true;
  $('#message').html('<h2> Player_X vs CPU </h2>')

}



const report = function(){
ui.showReport()
api.status()
.then(ui.showstatus)
.catch(ui.showstatusFail)
api.statusOver('true')
.then(ui.gameOver)
}


module.exports = {
  clickOn,
  restart,
  report,
  vsCpu
}
