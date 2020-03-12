const store = require('../store')

const signUpSuccess =function(data){
$('#message').text('signed up succesfully')

console.log("sign up data is"+data)
}

const signUpFailure =function(error){
$('#message').text('signed up fail')
$('#message').removeClass()
$('#message').addClass('failure')
console.log("sign up data is"+error)
}

const signInSuccess = function(data){
$('#message').text('signed in succesfully')
$('#first-page').removeClass()
$('#first-page').addClass('notShow')
$('#sec-page').removeClass()
console.log("** sign up data is ** "+data.user.token)
store.user=data.user
}

const signInFailure =function(error){
$('#message').text('signed in fail')
$('#message').removeClass()
$('#message').addClass('failure')
console.log("sign in data is"+error)
}

const changePasswordSuccess = function(data){
$('#message').text('password chnage succesfully')
$('#message').removeClass()
$('#message').addClass('Otil')
$('#sec-page').removeClass()
$('#div-password').removeClass()
$('#div-password').addClass('notShow')
console.log("sign in data is"+data)
}

 const changePasswordFailure  =function(error){
$('#message').text('change password fail')
$('#message').removeClass()
$('#message').addClass('failure')

console.log("sign in data is"+error)
}

const cancelPwd = function(){
$('#message').text('go back to game ')
$('#message').removeClass()
$('#message').addClass('Otil')

$('#sec-page').removeClass()
$('#div-password').removeClass()
$('#div-password').addClass('notShow')
$('#div-report').addClass('notShow')
}
const divPwd = function (){
  $('#div-password').removeClass()
  $('#sec-page').removeClass()
  $('#sec-page').addClass('notShow')
  $('#first-page').addClass('notShow')

}

const signOutSuccess = function (){
  $('#message').text('sign out succesfully')
  $('#message').removeClass()
  $('#message').addClass('success')

  $('#sec-page').addClass('notShow')
  $('#first-page').removeClass()
}

const signOutFailure = function(){
  $('#message').html('<h2>sign out fail</h2>')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

module.exports = {
signUpFailure,
signUpSuccess,
signInSuccess,
signInFailure,
changePasswordSuccess,
changePasswordFailure,
cancelPwd,
divPwd,
signOutSuccess,
signOutFailure,
}
