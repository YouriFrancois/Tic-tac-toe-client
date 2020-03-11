

const xUpdate = function(id){
console.log('inside  X update '+id)
  $("#"+id+"").removeClass()
  $("#"+id+"").addClass('col-4 box Xtil')
  $("#"+id+"").html("<h1>X</h1")

}


const oUpdate = function(id){
  console.log('inside  O update '+id)

  $("#"+id+"").removeClass()
  $("#"+id+"").addClass('col-4 box Otil')
  $("#"+id+"").html("<h1>O</h1")

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
  $('#message2').text('<h2>you play there already </h2>')
  $('#message2').removeClass()
  $('#message2').addClass('Xtil')
}
const restart =function(){

  $('#reset-page').removeClass()
  for(let i =0;i<9;i++){
    $("#"+i).html('')
    $("#"+i).removeClass()
    $("#"+i).addClass('col-4 col-md-4 box alt-color')
  }
  //$('#reset-page').addClass('Xtil')
}

module.exports = {
oUpdate,
xUpdate,
winner,
goodMove,
badMove,
restart,
}
