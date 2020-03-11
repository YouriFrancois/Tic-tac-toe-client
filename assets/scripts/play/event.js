

const ui= require('./ui')
const check = require('./checkArr')
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
    isX =false // switch user



}else
{
ui.oUpdate(id)
  tic[id]="O";

if(check.isOver(tic) ){
ui.winner('0') // the the user they won
play = false
}
  isX = true
}
if(play)
ui.goodMove()

}else{
  if(play)
ui.badMove()
}

if(!play){ ui.restart();
}


}

const restart = function(event){
  check.erase(tic);
  play =true;
  isX=true;
}


module.exports = {
  clickOn,
  restart
}
