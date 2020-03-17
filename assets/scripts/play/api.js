const config = require('../config')
const store = require('../store')




const createGame = function (data) {


  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers:{
      Authorization:'Token token='+store.user.token
    },
    data
    // data: data
  })
}

const update = function (data) {


  return $.ajax({
    url: config.apiUrl + '/games/'+store.game.id,
    method: 'PATCH',
    headers:{
      Authorization:'Token token='+store.user.token
    },
    data
    // data: data
  })
}

const statusOver = function (data){
  //onsole.log('update game  '+store.game.id)

  return $.ajax({
    url: config.apiUrl +'/games?over='+data ,
    method: 'GET',
    headers:{
      Authorization:'Token token='+store.user.token
    },
    data
    // data: data
  })

}

const status = function (){
  //console.log('update game  '+store.game.id)

  return $.ajax({
    url: config.apiUrl +'/games' ,
    method: 'GET',
    headers:{
      Authorization:'Token token='+store.user.token
    },

     data: '',
  })

}


module.exports = {
  createGame,
  update,
statusOver,
status
}
