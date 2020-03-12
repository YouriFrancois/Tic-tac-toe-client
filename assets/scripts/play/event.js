

const ui= require('./ui')
const check = require('./checkArr')
const api = require('./api')
const datax = require ('./gameData')
let isX=true;
let play =true
const tic=['','','','','','','','','']



const clickOn = function (event) {
let id=event.target.id
//  console.log(" this is "+id)

if(tic[id]===''&& play){

  if(isX){
ui.xUpdate(id)
  tic[id]="X";

  if(check.isOver(tic) ){
  ui.winner('X')
  play = false
  }

//==================================
api.update(datax.sendData(id,'x',!play))
.then(ui.updateGood)
.catch(ui.updateBad)
  //===============================================
    isX =false // switch user



}else
{
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
if(play)
ui.goodMove()

}else{
  if(play)
ui.badMove()
}

if(!play){
}


}


const restart = function(){
  ui.showgame()
  console.log('in restart')
const data=''
api.createGame({})
.then(ui.restart)
.catch(ui.noRestart)
check.erase(tic);
play =true;
isX=true;
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
  report
}
